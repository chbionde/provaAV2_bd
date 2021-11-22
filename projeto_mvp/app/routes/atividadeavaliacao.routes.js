module.exports = (()=>{
    const atividadeAvaliacaoController = require("../controllers/atividadeAvaliacao.controller");
    let router = require("express").Router();

    router.get("/", async (req, res)=>{
        const atividadeAvaliacao = await atividadeAvaliacaoController.index();
        res.json(atividadeAvaliacao);
    })
    router.get("/:id", async (req, res)=>{
        const atividadeAvaliacao = await atividadeAvaliacaoController.show(req.params.id);
        res.json(atividadeAvaliacao);
    })
    router.post("/", async (req, res)=>{
        const atividadeAvaliacao = await atividadeAvaliacaoController.store(req.body);
        res.json(atividadeAvaliacao);
    })
    router.put("/:id", async (req, res)=>{
        const atividadeAvaliacao = await atividadeAvaliacaoController.update(req.body, req.params.id);
        res.json(atividadeAvaliacao);
    })
    router.delete("/:id", async (req, res)=>{
        const atividadeAvaliacao = await atividadeAvaliacaoController.destroy(req.params.id);
        res.json(atividadeAvaliacao);
    })

    return router;
})()