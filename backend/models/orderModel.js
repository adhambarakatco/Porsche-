const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    user: {type: mongoose.Types.ObjectId, ref: "User"},
    product: {type: mongoose.Types.ObjectId, ref: "Product"}
});

module.exports=mongoose.model('Order',orderSchema);