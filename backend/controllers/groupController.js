const Group = require("../models/groupModel");

const addGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const newGroup = new Group({ name });
    const savedGroup = await newGroup.save();
    res.json(savedGroup);
  } catch (error) {
    console.error("error adding group:", error);
    res.status(500).json({ error: "Failed to add the group" });
  }
};

const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "Failed to fetch groups" });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const deletedGroup = await Group.findOneAndDelete(groupId);

    if (!deletedGroup) {
      return res.status(404).json({ error: "Group not found" });
    }

    res.json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Failed to delete the group" });
  }
};

module.exports = {
  addGroup,
  getGroups,
  deleteGroup,
};
