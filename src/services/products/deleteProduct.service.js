import database from "../../database";

const deleteProductService = async ({ id }) => {
  try {
    const result = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *;",
      [id]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteProductService;
