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


// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 15*60*1000, // 1 minute
  max: 400
});

// apply rate limiter to all requests
app.use(limiter);


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


app.listen(port, console.log(`${process.env.NODE_ENV} Mode | ${process.env.SERVER}:${port}`))