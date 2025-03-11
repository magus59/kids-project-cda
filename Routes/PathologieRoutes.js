const express = require("express");
const PathologieController = require("../Controllers/PathologieController");
const router = express.Router();

router.get("/", (request, response) => {
  PathologieController.getAllPathologie(request, response);
});

router.get("/:id", (request, response) => {
  PathologieController.getPathologieById(request, response);
});

router.post("/", (request, response) => {
  PathologieController.addPathologie(request, response);
});

router.patch("/:id", (request, response) => {
  PathologieController.updatePathologie(request, response);
});

router.delete("/:id", (request, response) => {
  PathologieController.deletePathologie(request, response);
});

module.exports = router;