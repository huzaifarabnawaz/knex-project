// const { table } = require("../dbconnection");

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//     return knex.schema.createTable('users',table=>{
//         table.increments('id')
//         table.string("email").notNullable().unique();
//         table.string("first_name").notNullable();
//         table.string("last_name").notNullable();
//         table.timestamp(true,true);
//     })
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
  
// };


const { table } = require("../dbconnection");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string("email").notNullable().unique();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.timestamps(true, true); // Corrected timestamps function
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
