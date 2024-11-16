import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

//Add post
router.post("/", createPost);

//Update post
router.put("/:id", updatePost);

//delete post
router.delete("/:id", deletePost);

export default router;
