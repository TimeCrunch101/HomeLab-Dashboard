const express = require('express')
const getRouter = express.Router()
const getController = require('../controllers/getController')

const initGetRouter = (app) => {

    getRouter.get('/api', getController.main)
    getRouter.get('/api/services', getController.getServices)
    getRouter.get('/api/get/service/:service_id', getController.getService)
    getRouter.get('/api/asset/list', getController.getAssetList)
    getRouter.get('/api/copyPassword/:cred_id', getController.copyPassword)

    return app.use('/', getRouter)
}

module.exports = getRouter;
module.exports = initGetRouter;