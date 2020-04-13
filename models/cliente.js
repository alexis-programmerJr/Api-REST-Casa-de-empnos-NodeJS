const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    Nombre: {
        type: Number,
        requiere: true
    },
    Tipo:{
        type: String,
        requiere:true
    },
    numero_telefono:{
        type:Number
    },
    direccion:{
        type:String,
        requiere:true
    },
    descripcion:{
        type:String
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Cliente',ClienteSchema)