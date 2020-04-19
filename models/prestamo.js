const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    folio: {
        type: Number,
        requiere: true
    },
    tipo:{
        type: String,
        requiere:true
    },
    descripcion:{
        type:String
    },
    id_cliente:{
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