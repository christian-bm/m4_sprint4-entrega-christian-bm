const verifyProductsValuesMiddleware = async (req, res, next) => {
  const { name, price, category_id } = req.body;

  try {
    if (!name || !price || !category_id) {
      throw new Error("Missing body content!");
    }

    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default verifyProductsValuesMiddleware;
