const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    stock: {
        type: Number,
        required: [true, 'Please provide a stock']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    line: {type: String, required: [true, 'Please provide a type']},
    model: {type: String, required: [true, 'Please provide a model']},
    year: {type: Number, required: [true,'Please provide a year']},
    specs:{
        color: {type: String},
        engine: {type: String},
        HP: {type: Number},
        torque: {type: Number},
        Acceleration: {type: Number},
        top_speed: {type: Number},
        fuel_type: {type: String,enum: ['Gasoline', 'Diesel', 'Electric','Hybrid']},
        transmission: {type: String,enum: ['Manual', 'Automatic','CVT']},
    }
});


// productSchema.pre('save', async function(next) {
//     try {
//         const existingProduct = await this.constructor.findOne({
//             line: this.line,
//             model: this.model,
//             year: this.year
//         });
//
//         if (existingProduct) {
//             const err = new Error('Product already exists');
//             return next(err);
//         }
//
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });


module.exports = mongoose.model('Product', productSchema);
