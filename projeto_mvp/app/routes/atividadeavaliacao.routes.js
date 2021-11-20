module.exports = (()=>{
    const atividadeavaliacaoController = require("../controllers/atividadeavaliacao.controller");
    let router = require("express").Router();

    router.get("/", async (req, res)=>{
        const atividadeavaliacao = await atividadeavaliacaoController.index();
        res.json(atividadeavaliacao);
    })
    router.get("/:id", async (req, res)=>{
        const atividadeavaliacao = await atividadeavaliacaoController.show(req.params.id);
        res.json(atividadeavaliacao);
    })
    router.post("/", async (req, res)=>{
        const atividadeavaliacao = await atividadeavaliacaoController.store(req.body);
        res.json(atividadeavaliacao);
    })
    router.put("/:id", async (req, res)=>{
        const atividadeavaliacao = await atividadeavaliacaoController.update(req.body, req.params.id);
        res.json(atividadeavaliacao);
    })
    router.delete("/:id", async (req, res)=>{
        const atividadeavaliacao = await atividadeavaliacaoController.destroy(req.params.id);
        res.json(atividadeavaliacao);
    })

    return router;
})()