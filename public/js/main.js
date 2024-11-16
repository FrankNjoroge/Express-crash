const output = document.getElementById("output");
const btn = document.getElementById("get-posts");

btn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const posts = await res.json();
  showPosts(posts);
});

function showPosts(posts) {
  output.innerHTML = posts.map((post) => {
    return `<h1>${post.title}</h1>`;
  });
}
