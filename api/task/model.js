// build your `Task` model here
const database = require("../../data/dbConfig")

async function getTasks(){
    const joined = await database("tasks as t")
        .join("projects as p", "t.project_id", "p.project_id")
        .select("t.*", "p.project_name", "p.project_description")
    
    joined.forEach(row =>{
        row.task_completed = Boolean(row.task_completed)
    })

    return joined;
}

async function getTaskById(id){
    const row = await database("tasks as t")
        .where("t.task_id", id)
        .first();

    row.task_completed = Boolean(row.task_completed);
    return row;
}

async function insert(task){
    const [result] = await database("tasks").insert(task);

    return getTaskById(result.task_id);
}

module.exports = {
    getTasks,
    insert
};