const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Avaliacao360 = sequelize.define(name, 
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


Avaliacao360.associate = (models) => {
    
    Avaliacao360.hasMany(models.aluno,{
        foreignKey: {
            name: 'id'
        },
        as: 'aluno'
    })
    
    Avaliacao360.hasMany(models.grupo,{
        foreignKey: {
            name: 'id'
        },
        as: 'grupo'
    })

    Avaliacao360.belongsToMany(models.softSkill,{
        through: 'aluno_avaliacao360',
        timestamps: false,
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'softskill'
    })

    Avaliacao360.hasMany(models.atividadeAvaliacao,{
        foreignKey: {
            name: 'id'
        },
        as: 'atividadeAvaliacao'
    })
}

module.exports = Avaliacao360;