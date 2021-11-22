const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const AtividadeAvaliacao = sequelize.define(name, 
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

AtividadeAvaliacao.associate = (models) => {

    AtividadeAvaliacao.belongsTo(models.grupo,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'grupo'
    })
    
    AtividadeAvaliacao.belongsTo(models.avaliacao360,{
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'avaliacao360'
    })

    AtividadeAvaliacao.hasMany(models.turma,{
        foreignKey: {
            name: 'id_atividadeAvaliacao'
        },
        as: 'turma'
    })

    AtividadeAvaliacao.belongsToMany(models.hardskill,{
        through: 'hardskill_atividadeAvaliacao',
        timestamps: false,
        foreignKey: {
            name: 'id_atividadeAvaliacao'
        },
        as: 'hardskills'
    })

}

module.exports = AtividadeAvaliacao;