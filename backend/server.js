const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const groupRoutes = require("./routes/groupRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api", groupRoutes);
app.use("/api", flashcardRoutes);

mongoose
  .connect("mongodb://127.0.0.1/simple-flash")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error);
  });
