import express from "express";
const userRoute = express.Router();
import {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

userRoute.post("/register", createUser);
userRoute.get("/login/:id", getSingleUser);
userRoute.patch("/update/:id", updateUser);
userRoute.delete("/delete/:id", deleteUser);

export default userRoute;
