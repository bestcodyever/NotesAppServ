const express = require("express")
const cors = require("cors")
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080
const notes = require('./routes')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/notes', notes)





app.listen(port)


module.exports = app;
