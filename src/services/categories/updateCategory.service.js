import database from "../../database";

const updateCategoryService = async ({ id, name }) => {
  try {
    const result = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]
    );

    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateCategoryService;
