const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Curso = sequelize.define(name, 
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
        codCurso: {
            type: DataTypes.STRING(50)
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'criado_em',
            defaultValue: sequelize.literal("NOW()")
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'atualizado_em',
            defaultValue: sequelize.literal("NOW()")
        }
    },{
        sequelize,
        tableName: name,
    }
)

Curso.associate = models => { 
    
    Curso.belongsTo(models.aluno,{
        foreignKey: {
            name: 'id_Aluno'
        },
        as: 'aluno'
    })

    Curso.belongsToMany(models.turma,{
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turma'
    })

}

module.exports = Curso;