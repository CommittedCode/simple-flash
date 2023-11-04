const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect("mongodb://127.0.0.1/simple-flash/")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error);
  });
