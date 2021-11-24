const product = require('./../models/productModel');
exports.createProduct = async (req, res) => {
    try {
  
      const newProduct = await product.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          product: newProduct
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
  