import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import httpStatus from "http-status";
import cors from "cors";
import colors from "colors";
import helmet from "helmet";
import CategoryRoute from "./routes/category.js";
import { dbconnect } from "./config/db.js";
import userRouter from "./routes/user.js";

const app = express();
const { NODE_ENV, PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(helmet());
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/user", userRouter);
app.use("/categories", Cate);
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Welcome to Node libary",
  });
});
app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: "error",
    payload: "No Endpoint found",
  });
});

dbconnect()
  .then((res) => {
    console.log(`Database is connected`.bgGreen);
    const port = NODE_ENV === "production" ? PORT : 5000;
    app.listen(port, (error) => {
      if (error) {
        console.log("server error", error);
      }
      console.log(
        `server is running on port ${port} in ${NODE_ENV} environment`.green
      );
    });
  })
  .catch((error) => {
    console.log(`database error: ${error}`.magenta);
  });
