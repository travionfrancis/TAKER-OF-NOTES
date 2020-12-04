// Just follow along with the video guide and written guides
// dependencies
const router = require("express").Router();
const store = require("../db/controller.js");

// API routes

router.get("./public/notes.html", function (req, res) {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});
// Post
router.post("./public/notes.html", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Deleting
router.delete("./public/notes.html/:id", function (req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

// Exports Module

module.exports = router;