const express = require("express");
const userRoute = express.Router();
const {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

userRoute.post("/register", createUser);
userRoute.get("/login/:id", getSingleUser);
userRoute.patch("/update/:id", updateUser);
userRoute.delete("/delete/:id", deleteUser);

module.exports = userRoute;
