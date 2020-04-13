const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    Folio: {
        type: Number,
        requiere: true
    },
    Tipo:{
        type: String,
        requiere:true
    },
    descripcion:{
        type:String
    },
    nombre_cliente:{
        type:String,
        requiere:true
    },
    estatus:{
        type:String,
        default:"Activo"
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Prestamo',PrestamoSchema)