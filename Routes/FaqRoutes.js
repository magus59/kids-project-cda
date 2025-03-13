const express = require("express");
const FaqController = require("../Controllers/FaqController");
const router = express.Router();

router.get("/", (request, response) => {
  FaqController.getAllFaq(request, response);
});

router.get("/:id", (request, response) => {
  FaqController.getFaqById(request, response);
});

router.post("/", (request, response) => {
  FaqController.addFaq(request, response);
});

router.patch("/:id", (request, response) => {
  FaqController.updateFaq(request, response);
});

router.delete("/:id", (request, response) => {
  FaqController.deleteFaq(request, response);
});

module.exports = router;