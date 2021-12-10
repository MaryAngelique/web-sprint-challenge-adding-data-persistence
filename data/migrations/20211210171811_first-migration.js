
exports.up = function(knex) {
  return knex.schema

    // Projects
    .createTable("projects", (table) => {
        table.increments("project_id");
        table.string("project_name", 50).notNullable();
        table.string("project_description", 200);
        table.boolean("project_completed", false);
    })

    // Resources
    .createTable("resources", (table) => {
        table.increments("resource_id");
        table.string("resource_name", 50).unique().notNullable();
        table.string("resource_description", 200);
    })

    
};

exports.down = function(knex) {
  
};
