module.exports = (()=>{
    const alunoHardskillController = require("../controllers/alunohardskill.controller");
    let router = require("express").Router();

    router.post("/:id", async (req, res)=>{
        const hardskill = await alunoHardskillController.store(req.body,req.params.id);
        res.json(hardskill);
    })
    
    router.delete("/:id", async (req, res)=>{
        const hardskill = await alunoHardskillController.destroy(req.body,req.params.id);
        res.json(hardskill);
    })

    return router;
})()