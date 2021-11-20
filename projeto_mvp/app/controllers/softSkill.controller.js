
const models = require('../db/models');


exports.index = async ()=>{
    const resultado = await models.softSkill.findAll();
    return resultado;
}

exports.show = async (id)=>{
    const resultado = await models.softSkill.findByPk(id);
    return resultado;
}

exports.store = async (softSkill)=>{
    const resultado = await models.softSkill.create(softSkill);
    return resultado;
}

exports.update = async (softSkill,id)=>{
    const resultado = await models.softSkill.update(softSkill,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id)=>{
    const resultado = await models.softSkill.destroy({
        where: {id:id}
    });
    return resultado;
}
