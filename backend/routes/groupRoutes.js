const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router.post("/groups", groupController.addGroup);
router.get("/groups", groupController.getGroups);
router.delete("/groups/:groupId", groupController.deleteGroup);

module.exports = router;
