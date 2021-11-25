const brand = require("./../models/brandModel");
exports.createBrand = async (req, res) => {
  try {
    const newBrand = await brand.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        brand: newBrand,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
