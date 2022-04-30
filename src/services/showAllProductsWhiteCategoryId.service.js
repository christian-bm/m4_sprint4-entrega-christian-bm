import database from "../database";

const showAllProductsWhiteCategoryIdService = async ({ id }) => {
  try {
    const result = await database.query(
      `
        SELECT
          c.name category_name,
          p.id,
          p.name,
          p.price,
          p.category_id
        FROM products p
        JOIN categories c
        ON p.category_id = c.id
        WHERE c.id = $1;
      `,
      [id]
    );

    const newResult = result.rows.map(({ category_name, id, name, price }) => {
      return { id, name, price, category: category_name };
    });

    return newResult;
  } catch (err) {
    throw new Error(err);
  }
};

export default showAllProductsWhiteCategoryIdService;
