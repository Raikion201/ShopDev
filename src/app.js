const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()


// init middlewares
app.use(morgan("common"))
app.use(helmet())
app.use(compression())
// init db
require('./dbs/init.mongodb')
const {checkOverLoad} = require('./helpers/check.connect')
checkOverLoad()
// init routes

app.get('/' , (req,res,next) => {
    const strCompress = 'Hello Factipjs'

    return res.status(500).json({
        message : 'Test',
        metadata : strCompress.repeat(100000)
    })
})
// handling error



module.exports = app