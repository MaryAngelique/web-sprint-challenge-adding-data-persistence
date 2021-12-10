
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

    // Tasks
    .createTable("tasks", (table) => {
        table.increments("task_id");
        table.string("task_description", 200).notNullable();
        table.string("task_notes", 200);
        table.boolean("task_completed", false);
        table.integer("project_id")
            .notNullable()
            .unsigned()
            .references("project_id")
            .inTable("projects")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT")
    })

    // Resource Assignment
    .createTable("project_resources", (table) => {
        table.increments("project-resources_id");
        table.integer("project_id");
        table.integer("resource_id")
            .notNullable()
            .unsigned()
            .references("resource_id")
            .inTable("resource")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT")
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
