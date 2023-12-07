import { verifyUser } from "../middleware/verifyUser.js";
import { validationMiddleware } from "../middleware/validation.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controller/category/category.js";
import { createUserSchema } from "../controller/category/categorySchema.js";
import express from "express";
const router = express.Router();
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
