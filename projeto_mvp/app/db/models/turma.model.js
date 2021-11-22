const {DataTypes, Sequelize} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Turma = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
    },{
        sequelize,
        tableName:name
    }
);

Turma.associate = models =>{

    Turma.belongsTo(models.disciplina,{
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'disciplina'
    })  

    Turma.belongsToMany(models.professor,{
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professores'
    })  

    Turma.belongsToMany(models.curso,{
        through: "turma_curso",
        timestamps: false,
        foreignKey:{
            name: 'id_turma'
        },
        as: 'cursos'
    })

    Turma.belongsToMany(models.hardskill,{
        through: "turma_hardskill",
        timestamps: false,
        foreignKey:{
            name: 'id_turma'
        },
        as: 'hardskills'
    })
}

module.exports = Turma;