
const models = require('../db/models');


exports.index = async ()=>{
    const resultado = await models.atividadeavaliacao.findAll();
    return resultado;
}

exports.show = async (id)=>{
    const resultado = await models.atividadeavaliacao.findByPk(id);
    return resultado;
}

exports.store = async (atividadeavaliacao)=>{
    const resultado = await models.atividadeavaliacao.create(atividadeavaliacao);
    return resultado;
}

exports.update = async (atividadeavaliacao,id)=>{
    const resultado = await models.atividadeavaliacao.update(atividadeavaliacao,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id)=>{
    const resultado = await models.atividadeavaliacao.destroy({
        where: {id:id}
    });
    return resultado;
}
