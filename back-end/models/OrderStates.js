const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderStatesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('OrderStates', OrderStatesSchema);