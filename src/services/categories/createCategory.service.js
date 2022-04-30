import database from "../../database";

const createCategoryService = async ({ name }) => {
  try {
    const result = await database.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *;",
      [name]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createCategoryService;
