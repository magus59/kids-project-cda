const express = require("express");
const UserController = require("../Controllers/UserController");
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

router.patch("/:id", (request, response) => {
  UserController.updateUser(request, response);
});

router.delete("/:id", (request, response) => {
  UserController.deleteUser(request, response);
});

module.exports = router;