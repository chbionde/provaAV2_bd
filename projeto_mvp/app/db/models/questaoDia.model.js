const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const QuestaoDia = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'criado_em',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'atualizado_em',
        }
    },{
        sequelize,
        tableName: name
    }
)

QuestaoDia.associate = (models) => {
    
    QuestaoDia.hasMany(models.aluno,{
        foreignKey: {
            name: 'id_questaodia'
        },
        as: 'aluno'
    })
    
    QuestaoDia.hasMany(models.questao,{
        foreignKey: {
            name: 'id_questaodia'
        },
        as: 'questao'
    })
}

module.exports = QuestaoDia;