const {pool} = require('../configs/DB')

exports.main = (req, res) => {
    res.send('hello world')
}

exports.getServices = (req, res) => {
    pool.query('SELECT service_id, title, service_icon FROM dbo_services', (err, data) => {
        if (err) throw err;
        res.json({
            status: "success",
            services: data
        })
    })
}

exports.getService = (req, res) => {
    const serviceID = req.params.service_id
    pool.query("SELECT * FROM dbo_services WHERE service_id = ?", [serviceID], (err, data) => {
        if (err) throw err;
        pool.query("SELECT * FROM dbo_hardware WHERE related_service = ?", [serviceID], (err, hardware) => {
            if (err) throw err;
            pool.query("SELECT * FROM dbo_creds WHERE related_service = ?", [serviceID], (err, creds) => {
                if (err) throw err;
                pool.query("SELECT * FROM dbo_documents WHERE related_service = ?", [serviceID], (err, documents) => {
                    if (err) throw err;
                    res.json({
                        status: 'success',
                        service_data: data[0],
                        hardwareData: hardware,
                        creds: creds,
                        documents: documents
                    })
                })
            })
        })
    })
}

exports.getAssetList = (req, res) => {
    pool.query("SELECT * FROM dbo_hardware", (err, data) => {
        if (err) throw err;
        res.json({
            status: 'success',
            assets: data
        })
    })
}

exports.copyPassword = (req, res) => {
    pool.query("SELECT password FROM dbo_creds WHERE cred_id = ?", [req.params.cred_id], (err, pass) => {
        if (err) throw err;
        res.json({
            status: "success",
            password: pass[0]
        })
    })
}

exports.getDocumentDrafts = (req, res) => {
    try {
        pool.query("SELECT draft_id FROM dbo_document_drafts", (err, drafts) => {
            if (err) throw err;
            res.json({
                status: 'success',
                documentDrafts: drafts
            })
        })
    } catch (error) {
        res.json({
            status: 'failed',
            message: error
        })
    }
}
exports.getDocumentDraftsAll = (req, res) => {
    try {
        pool.query(`SELECT
        draft.draft_id AS draft_id,
        draft.draft_title AS draft_title,
        service.title AS related_service,
        draft.timestamp AS timestamp
        FROM
        dbo_document_drafts draft
        LEFT JOIN
        dbo_services service ON draft.related_service = service.service_id`, (err, drafts) => {
            if (err) throw err;
            res.json({
                status: 'success',
                documentDrafts: drafts
            })
        })
    } catch (error) {
        res.json({
            status: 'failed',
            message: error
        })
    }
}
exports.viewDraft = (req, res) => {
    pool.query(`SELECT
    draft.draft_id AS draft_id,
    draft.draft_title AS draft_title,
    draft.draft_html AS draft_html,
    service.title AS related_service,
    draft.timestamp AS timestamp
    FROM
    dbo_document_drafts draft
    LEFT JOIN
    dbo_services service ON draft.related_service = service.service_id
    WHERE draft.draft_id = ${req.params.draft_id}`, (err, draft) => {
        if (err) throw "Internal Server Error"
        res.json({
            status: 'success',
            draft: draft[0]
        })
    })
}
exports.viewPublishedDocs = (req, res) => {
    pool.query(`SELECT
    published.doc_id AS doc_id,
    published.doc_title AS doc_title,
    service.title AS related_service,
    published.doc_timestamp AS timestamp
    FROM
    dbo_documents published
    LEFT JOIN
    dbo_services service ON published.related_service = service.service_id`, (err, docs) => {
        if (err) throw "Internal Server Error"
        res.json({
            status: 'success',
            docs: docs
        })
    })
}
exports.viewPublishedDoc = (req, res) => {
    pool.query(`SELECT
    published.doc_id AS doc_id,
    published.doc_title AS doc_title,
    published.doc_html AS doc_html,
    service.title AS related_service,
    published.doc_timestamp AS timestamp
    FROM
    dbo_documents published
    LEFT JOIN
    dbo_services service ON published.related_service = service.service_id
    WHERE published.doc_id = ${req.params.doc_id}`, (err, doc) => {
        if (err) throw "Internal Server Error"
        res.json({
            status: 'success',
            docs: doc[0]
        })
    })
}
