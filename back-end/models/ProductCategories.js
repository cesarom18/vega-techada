const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ProductCategories', ProductCategoriesSchema);