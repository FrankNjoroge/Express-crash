const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));

const posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "post not found" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
