import database from "../../database";

const verifyCategoryNameMiddleware = async (req, res, next) => {
  const { name } = req.body;

  if (typeof name !== "string") {
    return res.status(400).json({ message: "Missing body content!" });
  }

  try {
    const result = await database.query(
      "SELECT * FROM categories WHERE name = $1;",
      [name]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: "Category already created!" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default verifyCategoryNameMiddleware;
