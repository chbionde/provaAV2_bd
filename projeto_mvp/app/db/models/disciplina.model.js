const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Disciplina = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        codDisciplina: {
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

Disciplina.associate = (models) => {

    Disciplina.belongsToMany(models.professor,{
        through: 'professor_disciplina',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'professor'
    })
    
    Disciplina.belongsToMany(models.hardskill,{
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'hardskill'
    })
    
    Disciplina.belongsTo(models.turma,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })

}

module.exports = Disciplina;