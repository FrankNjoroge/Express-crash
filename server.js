import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", posts);

//error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
