import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import showCategoryService from "../services/categories/showCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";
import deleteCategoryService from "../services/categories/deleteCategoty.service";

class CategoriesController {
  async store(req, res) {
    try {
      const { name } = req.body;

      const result = await createCategoryService({ name });

      const message = {
        message: "Category created",
        category: result,
      };

      return res.status(201).json(message);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const categories = await listCategoriesService();

      return res.json(categories);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const category = await showCategoryService({ id });

      return res.json(category);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const result = await updateCategoryService({ id, name });

      const message = {
        message: "Category updated",
        category: result,
      };

      return res.json(message);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await deleteCategoryService({ id });

      const message = {
        message: "Category deleted",
        category: result,
      };

      return res.json(message);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default CategoriesController;
