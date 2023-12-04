import { verifyUser } from "../../middleware/verifyUser";
import { validationMiddleware } from "../../middleware/validation";
import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../../controller/category/category";
import { createUserSchema } from "../../controller/category/categorySchema";
const router = express.Route();
router
  .route("/")
  .get(verifyUser, getCategories)
  .post(validationMiddleware(createUserSchema), verifyUser, createCategory);
// you have to authenticate first before authurization

router
  .route("/:categoryId")
  .get(getCategory)
  .patch(validationMiddleware(createUserSchema), updateCategory)
  .delete(deleteCategory);

export default router;
