const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const contactosSchema = new Schema(
    {
        
        nombre: {type: String, required: true},
        email: {type: String, required: true},
        comentario: {type: String, required: true}
        
       
    },{
        timestamps: true
    }
)


const Contacto = mongoose.model('Contacto', contactosSchema);

module.exports = Contacto;