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