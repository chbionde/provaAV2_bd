const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Turma = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        codTurma: {
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

Turma.associate = (models) => {

    Turma.belongsToMany(models.aluno,{
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'aluno'
    })

    Turma.belongsTo(models.grupo,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'grupo'
    })

    Turma.belongsToMany(models.professor,{
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professor'
    })

    Turma.hasMany(models.disciplina,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'disciplina'
    })

    Turma.belongsTo(models.atividadeAvaliacao,{
        foreignKey: {
            name: 'id_atividadeAvaliacao'
        },
        as: 'atividadeAvaliacao'
    })

    Turma.belongsToMany(models.hardskill,{
        through: 'hardskill_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskill'
    })
    
    Turma.belongsToMany(models.curso,{
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'curso'
    })

}

module.exports = Turma;