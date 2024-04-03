const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es requerido'],
        maxlength: [50, 'El nombre del producto no puede exceder los 50 caracteres']
    },
    description: {
        type: String,
        minlength: [10, 'La descripción del producto debe tener al menos 10 caracteres'],
        maxlength: [200, 'La descripción del producto no puede exceder los 200 caracteres'],
        required: [true, 'La descripción del producto es requerida'],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ProductCategories',
        required: [true, 'La categoría del producto asociada al producto es requerida']
    },
    price: {
        type: Number,
        required: [true, 'El precio del producto es requerido'],
        min: [0, 'El precio del producto no puede ser menor a 0']
    },
    stock: {
        type: Number,
        required: [true, 'El stock del producto es requerido'],
        min: [0, 'El stock del producto no puede ser menor a 0']
    },
    available: {
        type: Boolean,
        required: [true, 'La disponibilidad del producto es requerida'],
        default: false
    },
    offerType: {
        type: String,
        enum: {
            values: ['G', 'KG', 'L', 'ML', 'UN'],
            message: 'El tipo de oferta del producto otorgado no es válido'
        },
        required: [true, 'El tipo de oferta del producto es requerido']
    },
    image: {
        type: String,
        required: [true, 'La imagen del producto es requerida']
    }
});

module.exports = mongoose.model('products', ProductSchema);