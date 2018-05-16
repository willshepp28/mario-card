
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('characters', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('picture').notNullable();
        table.text('description').notNullable();

    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters');
};
