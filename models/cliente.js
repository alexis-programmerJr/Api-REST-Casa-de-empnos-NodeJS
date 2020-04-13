const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        requiere:true
    },
    tipo:{
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