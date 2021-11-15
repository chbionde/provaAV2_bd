const usuario = require('./usuario.routes');

module.exports = app => {
    app.use('/api/usuario',usuario);
};