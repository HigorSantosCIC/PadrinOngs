
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('subs_id').notNullable();

        table.foreign('subs_id').references('id').inTable('subs')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};
