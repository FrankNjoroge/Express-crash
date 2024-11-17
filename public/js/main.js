const output = document.getElementById("output");
const btn = document.getElementById("get-posts");
const form = document.getElementById("add-post-form");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const posts = await res.json();
    showPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

function showPosts(posts) {
  output.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.textContent = post.title;
    output.appendChild(div);
  });
}

//submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      throw new Error("Failed to add post");
    }
    const newPost = await res.json();
    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
  } catch (error) {
    console.error("Error adding post");
  }
}

form.addEventListener("submit", addPost);
