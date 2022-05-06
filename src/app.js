import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.router";
import productsRouter from "./routers/products.router";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);

app.use("/products", productsRouter);

export default app.listen(process.env.PORT || 3333, () => {
  startDatabase();
  console.log(`Server running at port: ${process.env.PORT || 3333}`);
});
