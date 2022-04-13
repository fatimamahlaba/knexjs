/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
      table.increments('id');
      table.string('email').notNullable().unique();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('person');
};
