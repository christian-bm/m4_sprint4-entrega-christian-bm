import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import verifyProductIdExistMiddleware from "../middlewares/products/verifyProductIdExist.middleware";
import verifyProductsValuesMiddleware from "../middlewares/products/verifyProductsValues.middleware";
import CategoryController from "../controllers/category.controller";

import verifyCategoryIdExistMiddleware from "../middlewares/categories/verifyCategoryIdExist.middleware";

const categoryController = new CategoryController();

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.get(
  "/category/:id",
  verifyCategoryIdExistMiddleware,
  categoryController.show
);
productsRouter.post(
  "",
  verifyProductsValuesMiddleware,
  productsController.store
);
productsRouter.get("", productsController.index);
productsRouter.get(
  "/:id",
  verifyProductIdExistMiddleware,
  productsController.show
);
productsRouter.patch(
  "/:id",
  verifyProductIdExistMiddleware,
  productsController.update
);
productsRouter.delete(
  "/:id",
  verifyProductIdExistMiddleware,
  productsController.delete
);

export default productsRouter;
