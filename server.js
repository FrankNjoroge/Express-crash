import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const port = process.env.PORT || 8000;

const app = express();

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));
