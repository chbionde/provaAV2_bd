const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Aluno = sequelize.define(name, 
    {
        matricula: {type: DataTypes.STRING(10)} 
    },{
        sequelize,
        tableName: name,
        timestamps: false
    }
)

Aluno.associate = (models) => {

    Aluno.belongsTo(models.usuario,{
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })
 
    Aluno.belongsToMany(models.hardskill,{
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskill'
    })
    
    Aluno.belongsToMany(models.softSkill,{
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskill'
    })
    
    Aluno.belongsToMany(models.grupo,{
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupo'
    })
    
    Aluno.belongsToMany(models.turma,{
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turma'
    })
    
    Aluno.hasMany(models.curso,{
        foreignKey: {
            name: 'id_Aluno'
        },
        as: 'curso'
    })

    Aluno.belongsTo(models.avaliacao360,{
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'avaliacao360'
    })
    
    Aluno.belongsTo(models.questaoDia,{
        foreignKey: {
            name: 'id_questaodia'
        },
        as: 'questaodia'
    })
    
    Aluno.belongsTo(models.tarefa,{
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'tarefa'
    })

}

module.exports = Aluno;