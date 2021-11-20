const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Tarefa = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        codTarefa: {
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
        tableName: name,
    }
)

Tarefa.associate = (models) => {
    
    Tarefa.hasMany(models.aluno,{
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'aluno'
    })
    
    Tarefa.hasMany(models.grupo,{
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'grupo'
    })

    
}

module.exports = Tarefa;