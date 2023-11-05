const Group = require("../models/groupModle");

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

module.exports = {
  addGroup,
  getGroups,
};
