module.exports = (()=>{
    const softSkillController = require("../controllers/softSkill.controller");
    let router = require("express").Router();

    router.get("/", async (req, res)=>{
        const softSkill = await softSkillController.index();
        res.json(softSkill);
    })
    router.get("/:id", async (req, res)=>{
        const softSkill = await softSkillController.show(req.params.id);
        res.json(softSkill);
    })
    router.post("/", async (req, res)=>{
        const softSkill = await softSkillController.store(req.body);
        res.json(softSkill);
    })
    router.put("/:id", async (req, res)=>{
        const softSkill = await softSkillController.update(req.body, req.params.id);
        res.json(softSkill);
    })
    router.delete("/:id", async (req, res)=>{
        const softSkill = await softSkillController.destroy(req.params.id);
        res.json(softSkill);
    })

    return router;
})()