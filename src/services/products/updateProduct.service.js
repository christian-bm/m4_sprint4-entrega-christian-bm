import database from "../../database";

const updateProductService = async ({ id, name, price, category_id }) => {
  try {
    const product = await database.query(
      "SELECT * FROM products WHERE id = $1;",
      [id]
    );

    const result = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *;",
      [
        name || product.rows[0].name,
        price || product.rows[0].price,
        category_id || product.rows[0].category_id,
        id,
      ]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateProductService;
