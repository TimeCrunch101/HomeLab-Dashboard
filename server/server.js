if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.urlencoded({
    extended:false,
    limit: '500mb'
}))
app.use(express.json())
const initGetRouter = require("./routers/getRouter")
const initPostRouter = require("./routers/postRouter")
const initDeleteRouter = require("./routers/deleteRouter")
initGetRouter(app)
initPostRouter(app)
initDeleteRouter(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'))
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}


app.listen(port, 
    console.log(`${process.env.NODE_ENV} Mode | ${process.env.SERVER}:${port}`)
    )