import database from "../../database";

const listCategoriesService = async () => {
  try {
    const result = await database.query("SELECT * FROM categories;");

    return result.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoriesService;
