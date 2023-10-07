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
app.use('/',require('./routes'))
// handling error



module.exports = app