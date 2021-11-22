const {DataTypes, Sequelize} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js');
const sequelize = require('../index').getConnection();

const Disciplina = sequelize.define(name,{
    descricao:{
        type:DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName:name,
    timestamps:false
});



Disciplina.associate = (models) =>{
    Disciplina.hasMany(models.turma,{
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'turmas'
    });

    Disciplina.belongsToMany(models.professor,{
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'professores'
    })  
}

module.exports = Disciplina;