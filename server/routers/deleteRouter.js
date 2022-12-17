const express = require('express')
const deleteRouter = express.Router()
const deleteController = require('../controllers/deleteController')

const initDeleteRouter = (app) => {

    deleteRouter.delete('/api/delete/draft/:draft_id', deleteController.deleteDraft)
    deleteRouter.delete('/api/delete/published/document/:doc_id', deleteController.deleteDocument)

    return app.use('/', deleteRouter)
}

module.exports = deleteRouter;
module.exports = initDeleteRouter;