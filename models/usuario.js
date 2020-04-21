const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
    },
    contrasena:{
        type: String,
    },
    tipo:{
        type:String
    },
    estatus:{
        type:Boolean,
        default:true
    },
    correo:{
        type:String
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Usuarios',UsuarioSchema)