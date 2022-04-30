import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import deleteProductService from "../services/products/deleteProduct.service";
import showProductService from "../services/products/showProduct.service";
import updateProductSevice from "../services/products/updateProduct.service";

class ProductsController {
  async store(req, res) {
    const { name, price, category_id } = req.body;

    try {
      const result = await createProductService({ name, price, category_id });

      const message = {
        message: "Product created",
        product: result,
      };

      return res.status(201).json(message);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const result = await listProductsService();

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await showProductService({ id });

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, price, category_id } = req.body;

    try {
      const result = await updateProductSevice({
        id,
        name,
        price,
        category_id,
      });

      const message = {
        message: "Product updated",
        product: result,
      };

      return res.json(message);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await deleteProductService({ id });

      const message = {
        message: "Product deleted",
        product: result,
      };

      return res.json(message);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

export default ProductsController;
