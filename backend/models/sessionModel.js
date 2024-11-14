const mongoose=require('mongoose');

const schemaOptions = {
    strict: true,
    timestamps:true
}

const sessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user id']
    },
    token: {
        type: String,
        required: [true, 'Please provide a token']
    },
    expiresAt: {
        type: Date,
        required: [true, 'Please provide an expiration date']
    }
}, schemaOptions);

module.exports = mongoose.model('SessionSchema', sessionSchema);
