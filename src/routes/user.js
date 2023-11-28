import express from "express";
import {
  createUserSchema,
  loginSchema,
  getUserSchema,
} from "../controller/user/userSchema.js";
import { validationMiddleware } from "../middleware/validation.js";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getAllUser,
} from "../controller/user/user.js";
const router = express.Router();
router
  .route("/")
  .get(getAllUser)
  .post(validationMiddleware(createUserSchema), createUser);
router.route("/login").post(validationMiddleware(loginSchema), loginUser);
router
  .route("/:id")
  .get(validationMiddleware(getUserSchema, "QUERY"), getUser)
  .patch(updateUser)
  .delete(deleteUser);
export default router;
