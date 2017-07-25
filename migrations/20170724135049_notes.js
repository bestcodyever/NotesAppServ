
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table)=> {
    table.increments()
    table.text("note").notNullable()
    table.text("fam").notNullable()
    table.date("date").notNullable()
    table.integer("priority").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExisits("note")
};
