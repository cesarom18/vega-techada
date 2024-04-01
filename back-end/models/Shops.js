const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 255,
    },
    productCategories: {
        type: [Schema.Types.ObjectId],
        ref: 'ProductCategories',
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Shops', ShopsSchema);