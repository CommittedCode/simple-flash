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
      group: group._id,
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

// Function to get all flashcards by a specific group
const getFlashcardsByGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    // Find all flashcards that belong to the specified group
    const flashcards = await Flashcard.find({ group: groupId });

    res.json(flashcards); // Respond with the list of flashcards
  } catch (error) {
    console.error("Error getting flashcards by group:", error);
    res.status(500).json({ error: "Failed to get flashcards by group" });
  }
};

module.exports = {
  addFlashcardToGroup,
  getFlashcardsByGroup,
};
