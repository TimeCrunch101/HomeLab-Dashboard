const express = require('express')
const getRouter = express.Router()
const getController = require('../controllers/getController')

const initGetRouter = (app) => {

    getRouter.get('/api', getController.main)
    getRouter.get('/api/services', getController.getServices)
    getRouter.get('/api/get/service/:service_id', getController.getService)
    getRouter.get('/api/asset/list', getController.getAssetList)
    getRouter.get('/api/copyPassword/:cred_id', getController.copyPassword)
    getRouter.get('/api/get/document/draft-ids', getController.getDocumentDrafts)
    getRouter.get('/api/getall/document/drafts', getController.getDocumentDraftsAll)
    getRouter.get('/api/get/draft/:draft_id', getController.viewDraft)
    getRouter.get('/api/get/published/documents', getController.viewPublishedDocs)
    getRouter.get('/api/get/published/doc/:doc_id', getController.viewPublishedDoc)

    return app.use('/', getRouter)
}

module.exports = getRouter;
module.exports = initGetRouter;