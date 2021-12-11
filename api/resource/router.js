// build your `/api/resources` router here
const router = require("express").Router()
const Resource = require ("./model");

router.get("/", async (req, res, next) => {
    try{
        const resources = await Resource.findAll();
        res.status(200).json(resources);

    }catch (error){
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const resource = await Resource.insert(req.body);
        res.status(201).json(resource);

    } catch (error) {
        next(error);
    }
})

module.exports = router