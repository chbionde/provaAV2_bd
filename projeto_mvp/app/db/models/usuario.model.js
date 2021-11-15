const {DataTypes} = require('sequelize');

const name = require('path').basename(__file.replace(".model",""),'.js');

const sequelize = require('../index').getConnection();

const Usuario = sequelize.define(name, {
    nome_completo: {
        typer: DataTypes.STRING,
        allowNull: false
    },
    email: {
        typer: DataTypes.STRING(50),
        allowNull: false
    },
    senha: {
        typer: DataTypes.STRING(30),
        allowNull: false
    },
    ativo: {
        typer: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        typer: DataTypes.DATE,
        field: 'criado_em'
    },
    createdAt: {
        typer: DataTypes.DATE,
        field: 'atualizado_em'
    }
},{
    sequelize,
    tableName: name,

});

module.exports = Usuario;