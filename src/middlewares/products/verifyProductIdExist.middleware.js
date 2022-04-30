import database from "../../database";

const verifyProductIdExistMiddleware = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await database.query(
      "SELECT * FROM products WHERE id = $1;",
      [id]
    );

    if (!result.rows.length) {
      throw new Error("Not found any product with this id!");
    }

    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default verifyProductIdExistMiddleware;
