import database from "../../database";

const verifyCategoryIdExistMiddleware = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await database.query(
      "SELECT * FROM categories WHERE id = $1;",
      [id]
    );

    if (!result.rows.length) {
      throw new Error("Not found any categoty with this id!");
    }

    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default verifyCategoryIdExistMiddleware;
