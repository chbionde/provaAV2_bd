
const models = require('../db/models');

exports.show = async (id)=>{
    //regras de negocio
    // const resultado = {
    //     id: id
    // }
    // return resultado;

    const resultado = await models.usuario.findByPk(id);

    return resultado;
}