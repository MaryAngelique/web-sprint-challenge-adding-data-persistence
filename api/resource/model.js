// build your `Resource` model here
const database = require("../../data/dbConfig");

async function getAll() {
    const resources = await database("resources");

    return resources;
}

function getById(id) {
    return database("resource")
        .where("resource_id", id)
        .first();
}

async function insert(resource) {
    const [ id ] = await database("resources")
        .insert(resource);

    return getById(id);
}

module.exports = {
    getAll,
    getById,
    insert
}