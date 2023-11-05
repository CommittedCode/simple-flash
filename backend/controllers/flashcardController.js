const Flashcard = require("../models/flashcardModel");
const Group = require("../models/groupModel");

// Function to add a flashcard to a group
const addFlashcardToGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const { question, answer } = req.body;

    // Check if the group exists
    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    // Create a new flashcard
    const newFlashcard = new Flashcard({
      question,
      answer,
    });

    // Add the flashcard to the group's flashcards array
    group.flashcards.push(newFlashcard);

    // Save the changes to the group and the new flashcard
    await Promise.all([group.save(), newFlashcard.save()]);

    res.json(newFlashcard); // Respond with the added flashcard
  } catch (error) {
    console.error("Error adding flashcard to group:", error);
    res.status(500).json({ error: "Failed to add flashcard to the group" });
  }
};

module.exports = {
  addFlashcardToGroup,
};
