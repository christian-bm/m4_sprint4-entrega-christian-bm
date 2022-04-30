import { Router } from "express";
import verifyCategoryNameMiddleware    from "../middlewares/categories/verifyCategoryName.middleware";
import verifyCategoryIdExistMiddleware from "../middlewares/categories/verifyCategoryIdExist.middleware";
import CategoriesController            from "../controllers/categories.controller";

const categoriesController = new CategoriesController();

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  verifyCategoryNameMiddleware,
  categoriesController.store
);
categoriesRouter.get("", categoriesController.index);
categoriesRouter.get(
  "/:id",
  verifyCategoryIdExistMiddleware,
  categoriesController.show
);
categoriesRouter.patch(
  "/:id",
  verifyCategoryIdExistMiddleware,
  categoriesController.update
);
categoriesRouter.delete(
  "/:id",
  verifyCategoryIdExistMiddleware,
  categoriesController.delete
);

export default categoriesRouter;
