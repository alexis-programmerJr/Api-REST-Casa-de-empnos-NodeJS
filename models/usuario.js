const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    Nombre: {
        type: String,
        requiere: true
    },
    Contrasena:{
        type: String,
        requiere:true
    },
    Tipo:{
        type:String,
        requiere:true
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Usuarios',UsuarioSchema)