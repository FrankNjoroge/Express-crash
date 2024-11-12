const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

const posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.statusCode = 404;
    res.json({ message: "post not found" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
