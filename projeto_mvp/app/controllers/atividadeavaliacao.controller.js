
const models = require('../db/models');


exports.index = async ()=>{
    const resultado = await models.atividadeAvaliacao.findAll();
    return resultado;
}

exports.show = async (id)=>{
    const resultado = await models.atividadeAvaliacao.findByPk(id);
    return resultado;
}

exports.store = async (atividadeAvaliacao)=>{
    const resultado = await models.atividadeAvaliacao.create(atividadeAvaliacao,{
        include: ['avaliacao360','grupo','hardskill','turma']
    });
    return resultado;
}

exports.update = async (atividadeAvaliacao,id)=>{
    const resultado = await models.atividadeAvaliacao.update(atividadeAvaliacao,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id)=>{
    const resultado = await models.atividadeAvaliacao.destroy({
        where: {id:id}
    });
    return resultado;
}
