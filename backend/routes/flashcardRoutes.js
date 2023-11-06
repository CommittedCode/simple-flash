const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

router.post("/flashcards/:groupId", flashcardController.addFlashcardToGroup);
router.delete(
  "/groups/:groupId/flashcards/:flashcardId",
  flashcardController.deleteFlashcardByGroup
);

module.exports = router;
