const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router.post("/groups", groupController.addGroup);

module.exports = router;
