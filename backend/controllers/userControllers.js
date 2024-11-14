const userModel = require('../models/userModel.js');
const sessionModels = require('../models/sessionModel.js');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const bcrypt = require('bcryptjs');


module.exports.register = async (req, res) => {
    const { name, email, password, phone } = req.body;
    console.log(req.body);
    if(!name || !email || !password || !phone)
        return res.status(400).json({message: 'Please provide all fields'});
    try{
         const userExists = await userModel.findOne({email});
         if(userExists) {
             return res.status(400).json({message: 'User already exists'});
         }
        await userModel.create({name, email, password, phone});
        return res.status(200).json({message: 'User created successfully'});
    }catch (err){
        return res.status(500).json({message: err.message});
    }
};

module.exports.login=async (req,res)=> {
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({mssg: "All fields are required"});
        }
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(400).json({mssg: "User does not exist"});
        }
        const isMatch = await user.compare(password);
        if (!isMatch) {
            return res.status(400).json({mssg: "Invalid credentials"});
        }
        const currentDate= new Date();
        const expiresAt = new Date(currentDate + 24 * 60 * 60 * 1000);

        const token = jwt.sign(
            {user:{_id:user._id,role:user.role}},
            process.env.JWT_SECRET,
            {expiresIn:'2d'}
        )


        const newSession = await sessionModels.create({
            user_id: user._id,
            token,
            expiresAt
        });

        return res
            .cookie("token", token, {
                expires: expiresAt,
                withCredentials: true,
                httpOnly: false,
                SameSite:'none'})
            .status(200)
            .json({ message: "login successfully", user });
    }
    catch (err) {
        return res.status(500).json({mssg: err.message});
    }
}



