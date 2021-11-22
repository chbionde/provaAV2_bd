const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const HardSkill = sequelize.define(name, 
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
        tableName: name,
    }
)

HardSkill.associate = models => {

    HardSkill.belongsToMany(models.aluno,{
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'aluno'
    })
    
    HardSkill.belongsToMany(models.disciplina,{
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'disciplina'
    })
    
    HardSkill.belongsToMany(models.atividadeAvaliacao,{
        through: 'hardskill_atividadeAvaliacao',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'atividadeAvaliacao'
    })
    
    HardSkill.belongsToMany(models.turma,{
        through: 'hardskill_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'turma'
    })

    HardSkill.belongsTo(models.questao,{
        foreignKey: {
            name: 'id_questao'
        },
        as: 'questao'
    })

    HardSkill.belongsToMany(models.turma,{
        through: 'hardskill_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'turmas'
    })

}

module.exports = HardSkill;