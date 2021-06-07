exports.up = function(knex) {
    return knex.schema.createTable("roles", table => {
        table.increments("id").primary();
        table.string("role_name", 45).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("roles");
};

exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("username");
        table.string("email");
        table.integer("role_id").unsigned();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};