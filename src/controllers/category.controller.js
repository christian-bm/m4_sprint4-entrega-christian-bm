import showAllProductsWhiteCategoryIdService from "../services/showAllProductsWhiteCategoryId.service";

class CategoryController {
  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await showAllProductsWhiteCategoryIdService({
        id,
      });

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

export default CategoryController;
