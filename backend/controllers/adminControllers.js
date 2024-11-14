const userModel = require('../models/userModel.js');
const productModel = require('../models/productModel.js');
const sessionModels = require('../models/sessionModel.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.addNewProduct = async (req, res) => {
    const { name, price, stock, description, line, model, year} = req.body;
    if(!name || !price || !stock || !description || !line || !model || !year)
        return res.status(400).json({message: 'Please provide all fields'});
    try{
        await productModel.create({name, price, stock, description, line, model, year});
        return res.status(201).json({message: 'Product created successfully'});
    }catch (err){
        return res.status(500).json({message: err.message});
    }
}

module.exports.getAllProducts = async (req, res) => {
    try{
        const products = await productModel.find();
        return res.status(200).json(products);
    }catch (err){
        return res.status(500).json({message: err.message});
    }
}

module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        await productModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'Product deleted successfully'});
    }catch (err){
        return res.status(500).json({message: err.message});
    }
}

module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, stock, description, line, model, year, specs } = req.body;
    try{
        await productModel.findByIdAndUpdate(id, {name, price, stock, description, line, model, year});
        return res.status(200).json({message: 'Product updated successfully'});
    }catch (err){
        return res.status(500).json({message: err.message});
    }
}