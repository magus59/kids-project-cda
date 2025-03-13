const express = require("express");
const UserController = require("../Controllers/UserController");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/", (request, response) => {
  UserController.getAllUser(request, response);
});

router.get("/:id", (request, response) => {
  UserController.getUserById(request, response);
});

router.post("/", (request, response) => {
  UserController.addUser(request, response);
});

router.patch("/:id", verifyToken, (request, response) => {  
  UserController.updateUser(request, response);
});

router.delete("/:id", verifyToken, (request, response) => { 
  UserController.deleteUser(request, response);
});

router.post("/login", (request, response) => {
  UserController.login(request, response);
});

module.exports = router;
