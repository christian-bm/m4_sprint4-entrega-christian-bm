import database from "../../database";

const showProductService = async ({ id }) => {
  try {
    const result = await database.query(
      "SELECT * FROM products WHERE id = $1;",
      [id]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default showProductService;
