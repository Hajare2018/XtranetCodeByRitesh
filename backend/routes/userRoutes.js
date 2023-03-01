const express = require("express");
const userRoutes = express.Router();
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controller/userController");

userRoutes.get("/getuser", getUser);
userRoutes.post("/postuser", postUser);
userRoutes.put("/putuser/:id", putUser);
userRoutes.delete("/deleteuser/:id", deleteUser);

module.exports = { userRoutes };
