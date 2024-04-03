const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la tienda es requerido'],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: [true, 'El propietario de la tienda es requerido']
    },
    email:{
        type: String,
        required: [true, 'El correo electrónico de la tienda es requerido'],
        unique: [true, 'El correo electrónico de la tienda ya existe'],
    },
    phone: {
        type: String,
        required: [true, 'El teléfono de la tienda es requerido'],
    },
    description: {
        type: String,
        minlength: [10, 'La descripción de la tienda debe tener al menos 10 caracteres'],
        maxlength: [200, 'La descripción de la tienda no puede exceder los 200 caracteres'],
    },
    productCategories: {
        type: [Schema.Types.ObjectId],
        ref: 'ProductCategories',
        required: [true, 'Las categorías de los productos de la tienda son requeridas']
    },
    image: {
        type: String,
        required: [true, 'La imagen de la tienda es requerida']
    }
});

module.exports = mongoose.model('shops', ShopsSchema);