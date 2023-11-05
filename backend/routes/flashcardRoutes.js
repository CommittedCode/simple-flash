const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

router.post("/flashcards/:groupId", flashcardController.addFlashcardToGroup);

module.exports = router;
