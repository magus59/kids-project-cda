const express = require("express");
const SymptomeController = require("../Controllers/SymptomeController");
const router = express.Router();

router.get("/", (request, response) => {
  SymptomeController.getAllSymptome(request, response);
});

router.get("/:id", (request, response) => {
  SymptomeController.getSymptomeById(request, response);
});

router.post("/", (request, response) => {
  SymptomeController.addSymptome(request, response);
});

router.patch("/:id", (request, response) => {
  SymptomeController.updateSymptome(request, response);
});

router.delete("/:id", (request, response) => {
  SymptomeController.deleteSymptome(request, response);
});

module.exports = router;