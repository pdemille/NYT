const mongoose = require("mongoose");

// Save ref(reference) to Schema constructor
const Schema = mongoose.Schema;

// Using Schema constructor, create new NoteSchema object
const CommentSchema = new Schema({
  body: String
});

// Creates model from the schema above
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
