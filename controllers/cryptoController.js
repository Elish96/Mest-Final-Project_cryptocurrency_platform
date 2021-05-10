// THIS IS ALSO KNOWN AS THE PRODUCT

const Crypto = require('../models/Crypto')

const getAllCrypto = async (req, res) => {
    const cryptos = await Crypto.find();
    res.status(200).json(cryptos);
};

const getCrypto = async (req, res) => {
    res.send('Single Crpto');
};

const createCrypto = async (req, res) => {
    const currencyname = req.body.currencyname;
    const price = req.body.price;
    const amountInStock = req.body.amountInStock;
    
    const crypto = await Post.create({ currencyname, price,amountInStock });
    res.status(201).json({ crypto });
};

const updateCrypto = async (req, res) => {
    res.send('Update Crpto');
};

const deleteCrypto = async (req, res) => {
    res.send('Delete Crpto');
};


module.exports = {
    getAllCrypto, getCrypto, createCrypto, updateCrypto, deleteCrypto
};
