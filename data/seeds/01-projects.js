exports.seed = function(knex) {
    return knex("projects").insert([
      {
        project_name: "MVP",
        project_description: "Unit 4 Sprint Challenge 2"
      }
    ]);
  };