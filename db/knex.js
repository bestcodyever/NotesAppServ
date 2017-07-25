const environment = process.env.NODE_ENV || 'developement'

const config = require('../knexfile')[environment]

module.exports = require('knex')(config)
