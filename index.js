const express = require("express")
const cors = require("cors")
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const routes= require('./routes')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({encoded: false}))

app.use('/notes', routes)
app.listen(port)

module.exports = app;
