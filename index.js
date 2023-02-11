fetch("/posts/postOne.md")
  .then((response) => response.text())
  .then((markdown) => {
    // Convert the markdown to HTML using marked.js
    let html = marked.parse(markdown);
    // Update the preview with the converted HTML
    document.getElementById("article").innerHTML = html;
  });
