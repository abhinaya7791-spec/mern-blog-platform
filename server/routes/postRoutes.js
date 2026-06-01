const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// CREATE
router.post("/create", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// GET ALL
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// EDIT
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;