
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", (table) => {
        table.increments("project_id");
        table.string("project_name", 50).notNullable();
        table.string("project_description", 200);
        table.boolean("project_completed", false);
    })
};

exports.down = function(knex) {
  
};
