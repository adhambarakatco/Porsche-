const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const {methods} = require("express/lib/router/route");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    phone:{
        type:String,
        required:[true,'Please provide a phone number']
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    // 1 for customer, 2 for admin
    role:{
        type:Number,
        min:1,
        max:2,
        default:1
    },

    token:{
        type:String
    }

});


// Hash the password before saving it to the database
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});


// Add a method to compare passwords
userSchema.methods.compare = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model('User', userSchema);





