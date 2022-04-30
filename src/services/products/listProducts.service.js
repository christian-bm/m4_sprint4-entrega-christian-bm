import database from "../../database";

const listProductsService = async () => {
  try {
    const result = await database.query("SELECT * FROM products;");

    return result.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listProductsService;
