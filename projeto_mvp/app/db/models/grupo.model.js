const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Grupo = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        codGrupo: {
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

Grupo.associate = models => { 
    
    Grupo.belongsTo(models.tarefa,{
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'tarefa'
    })

    Grupo.belongsTo(models.avaliacao360,{
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'avaliacao360'
    })
    
    Grupo.hasMany(models.atividadeAvaliacao,{
        foreignKey: {
            name: 'id'
        },
        as: 'atividadeAvaliacao'
    })

    Grupo.belongsToMany(models.aluno,{
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'alunos'
    })

    Grupo.hasMany(models.turma,{
        foreignKey: {
            name: 'id'
        },
        as: 'turma'
    })

}

module.exports = Grupo;