
// dependecies
const path = require("path");
const express = require("express");
const router = express.Router();

// HTML Routes

// sends the notes html page 
router.get("./notes.html", function (req, res) {
  // makes notes.html page show up when url is set to go to "public/notes.html"
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Sets page to the default html page
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


// Exports Module, same as before

module.exports = router;