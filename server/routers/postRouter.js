const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/postController')

const initPostRouter = (app) => {

    postRouter.post('/add/service', postController.addService)
    postRouter.post('/api/add/hardware', postController.addHardware)
    postRouter.post('/api/create/credential', postController.createCredential)

    return app.use('/', postRouter)
}

module.exports = postRouter;
module.exports = initPostRouter;