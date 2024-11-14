const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mohammedgad:esqzbZ8dyC0BrNag@cluster0.g7nvupi.mongodb.net/Porsche_db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;