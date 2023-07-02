const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/postController')

const initPostRouter = (app) => {

    postRouter.post('/add/service', postController.addService)
    postRouter.post('/api/add/hardware', postController.addHardware)
    postRouter.post('/api/create/credential', postController.createCredential)
    postRouter.post('/create/document/draft', postController.createDocumentDraft)
    postRouter.post('/api/publish/draft/:draft_id', postController.publishDraft)

    postRouter.delete('/api/delete/draft/:draft_id', postController.deleteDraft)
    postRouter.delete('/api/delete/published/document/:doc_id', postController.deleteDocument)
    postRouter.delete('/api/delete/service/:service_id', postController.deleteService)

    return app.use('/', postRouter)
}

module.exports = postRouter;
module.exports = initPostRouter;