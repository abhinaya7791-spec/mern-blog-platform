const express = require("express");
const Comment = require("../models/Comment");

const router = express.Router();

// ADD COMMENT
router.post("/add", async (req, res) => {
  const { text, postId, userId, username } = req.body;

  const comment = await Comment.create({
    text,
    postId,
    userId,
    username
  });

  res.json(comment);
});

// GET COMMENTS FOR POST
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
});

module.exports = router;