const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        requiere: true
    },
    description:{
        type: String,
        requiere:true
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Posts',PostSchema)