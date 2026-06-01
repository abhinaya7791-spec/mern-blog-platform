const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  postId: String,
  username: String
});

module.exports = mongoose.model("Comment", commentSchema);