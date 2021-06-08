var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexFile')[environment]
module.exports = require('knex')(config)