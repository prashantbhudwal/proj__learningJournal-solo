function addClasses() {}

fetch("/posts/postOne.md")
  .then((response) => response.text())
  .then((markdown) => {
    // Convert the markdown to HTML using marked.js
    let html = marked.parse(markdown);
    const preview = document.getElementById("article");
    preview.innerHTML = html;
    // Add dynamic classes to the HTML elements
    const h1Elements = preview.getElementsByTagName("h1");
    for (let i = 0; i < h1Elements.length; i++) {
      h1Elements[i].classList.add("article__headingOne");
    }
    const h2Elements = preview.getElementsByTagName("h2");
    for (let i = 0; i < h2Elements.length; i++) {
      h2Elements[i].classList.add("article__headingTwo");
    }
    const pElements = preview.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].classList.add("article__paragraphs");
    }
    const imgElements = preview.getElementsByTagName("img");
    for (let i = 0; i < imgElements.length; i++) {
      imgElements[i].classList.add("article__images");
    }
  });
