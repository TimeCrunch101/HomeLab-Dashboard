const {pool} = require('../configs/DB')

exports.addService = (req, res) => {
    pool.query("INSERT INTO dbo_services SET ?", {
        title: req.body.title,
        homepage: req.body.homepage,
        service_username: req.body.service_username,
        service_password: req.body.service_password
    }, (err) => {
        if (err) throw err;
        res.json({
            status: 'Success',
            message: 'Service added successfully'
        })
    })
}

exports.addHardware = (req, res) => {
    const {
        make_model,
        hostname,
        IPMI,
        RAM,
        storage,
        NICS,
        cost,
        SN,
        related_service
    } = req.body

    pool.query("INSERT INTO dbo_hardware SET ?", {
        make_model: make_model,
        hostname: hostname,
        ipmi: IPMI,
        ram: RAM,
        storage: storage,
        nics: NICS,
        cost: cost,
        serial_number: SN,
        related_service: related_service
    }, (err) => {
        if (err) throw err;
        res.json({
            status: 'success',
            message: 'Hardware added'
        })
    })

}

exports.createCredential = (req, res) => {
    const {
        title,
        username,
        password,
        link,
        related_service
    } = req.body
    pool.query("INSERT INTO dbo_creds SET ?", {
        title: title,
        username: username,
        password: password,
        link: link,
        related_service: related_service,
    }, (err) => {
        if (err) throw err;
        res.json({
            status: 'success',
            message: 'Credential Added'
        })
    })
}

exports.createDocumentDraft = (req, res) => {
    console.log(req.body)
    pool.query("INSERT INTO dbo_document_drafts SET ?", {
        draft_title: req.body.title,
        draft_html: req.body.text
    }, (err) => {
        if (err) throw err;
        res.json({
            status: 'success',
            message: 'Draft saved successfully'
        })
    })
}