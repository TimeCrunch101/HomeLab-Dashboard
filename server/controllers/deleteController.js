const {pool} = require('../configs/DB')

exports.deleteDraft = (req, res) => {
    try {
        pool.query("DELETE FROM dbo_document_drafts WHERE draft_id = ?", [req.params.draft_id], (err) => {
            if (err) throw "Internal Server Error"
            res.json({
                status: 'success',
                message: 'Draft Deleted Successfully'
            })
        })
    } catch (error) {
        res.json({
            status: 'failed',
            message: error
        })        
    }
}
exports.deleteDocument = (req, res) => {
    try {
        pool.query("DELETE FROM dbo_documents WHERE doc_id = ?", [req.params.doc_id], (err) => {
            if (err) throw "Internal Server Error"
            res.json({
                status: 'success',
                message: 'Draft Deleted Successfully'
            })
        })
    } catch (error) {
        res.json({
            status: 'failed',
            message: error
        })        
    }
}
exports.deleteService = (req,res) => {
    pool.query("DELETE FROM dbo_services WHERE service_id = ?",[req.params.service_id], (err) => {
        try {
            if (err) throw new Error('Could not delete service', {cause: err.message})
            res.status(201).json({
                message: "Service Deleted"
            })
        } catch (error) {
            res.status(500).json({
                error: error.message,
                cause: error.cause
            })
        }
    })
}