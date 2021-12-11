// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();

const Task = require("./model");

router.get("/", async (req, res, next) => {
    try{
        const task = await Task.getTasks();
        res.status(200).json(task);

    }catch (error){
        next(error);
    }
})

router.post("/api/tasks", (req, res, next) => {
    Task.insert(req.body)
        .then(task =>{
            res.status(201).json(task);

        }) .catch(next)
})

module.exports = router;