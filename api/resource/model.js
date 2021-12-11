// build your `Resource` model here
const database = require("../../data/dbConfig");

async function findAll () {
    return database("resources");
}

function findById (id) {
    return database("resources")
        .where("resource_id", id)
        .first();
}

async function insert (resource) {
    const [id] = await database("resources")
        .insert(resource);

    return findById(id);
}

module.exports = { 
    findAll, 
    insert 
}
