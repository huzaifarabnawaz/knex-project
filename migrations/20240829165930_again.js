const { table } = require("../dbconnection");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('person',table=>{

        table.increments('id')
        table.string('email').notNullable().unique()
        table.string('name').notNullable().unique()
        table.timestamp(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
