const mongoose = require('mongoose');
const {Schema} = mongoose;

const tareas = new Schema({
    nombre:{type: String, required:true},
    email:{type: String, required:true},
    texto:{type: String, required:true},
    status:{type: String, required:false}
});

module.exports = mongoose.model('Datos',tareas);