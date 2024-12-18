import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/NotFound.js";
import url from "url";

const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

//setup static folder
const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", posts);

//catch all for invalid endpoints
app.use(notFound);
//error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
