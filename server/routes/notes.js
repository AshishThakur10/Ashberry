const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
//ROUTE 1: Get All the Notes using :GET "/api/auth/getuser".Doesnt require Auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal error occur");
  }
});
//ROUTE 2: Add a new note using POST "/api/notes/addnote" .Doesnt require Auth
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are errors,return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();

      res.json(saveNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal error occur");
    }
  }
);
//ROUTE 3:update an existing Note using PUT "/api/notes/updatenote" .Doesnt require Auth
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    //Find the note to be updated and  update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal error occur");
  }
});
//ROUTE 4:update an existing Note using DELELTE  "/api/notes/deletenote" .Doesnt require Auth
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  
  try {
    //Find the note to be updated and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }
    //Allow delettion only if user owns the notes
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal error occur");
  }
});
module.exports = router;
