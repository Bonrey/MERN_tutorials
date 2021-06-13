const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ error });
  }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });

  let savedPost = await newPost.save();
  try {
    res.json(savedPost);
  } catch (error) {
    res.json({ error });
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
  } catch (error) {
    res.json({ error });
  }
});

router.delete('/:postId', async (req, res) => {
  try {
    const deletedPost = await Post.findOneAndDelete(req.params.postId);
    res.json(deletedPost);
  } catch (error) {
    res.json({ error });
  }
});

router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } } 
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ error });
  }
});


module.exports = router;