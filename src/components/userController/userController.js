const users = require("../userController/models/index")
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.string('username')
        t.string('email')
        t.string('password')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };