const {DataTypes, Sequelize} = require('sequelize');

const name = require('path').basename(__filename.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();


const Questao = sequelize.define(name, 
    {
        descricao: {
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
        tableName: name
    }
)

Questao.associate = models => { 
    
    Questao.belongsTo(models.usuario,{
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Questao.belongsTo(models.questaoDia,{
        foreignKey: {
            name: 'id_questaodia'
        },
        as: 'questaodia'
    })
    
    Questao.belongsToMany(models.hardskill,{
        through: 'questao_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_questao'
        },
        as: 'hardskill'
    })
    
    

}


module.exports = Questao;