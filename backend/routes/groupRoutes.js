const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
const flashcardController = require("../controllers/flashcardController");

router.post("/groups", groupController.addGroup);
router.get("/groups", groupController.getGroups);
router.delete("/groups/:groupId", groupController.deleteGroup);

router.get(
  "/groups/:groupId/flashcards",
  flashcardController.getFlashcardsByGroup
);

module.exports = router;
