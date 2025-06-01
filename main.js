const mainContent = document.getElementById("main-content");

const routes = {
  "#about": "sections/about.html",
  "#projects": "sections/projects.html",
  "#articles": "sections/articles.html",
  "#contact": "sections/contact.html"
};

function loadSection(hash) {
  const url = routes[hash] || routes["#about"];
  fetch(url)
    .then(response => response.text())
    .then(html => {
      mainContent.innerHTML = html;
    });
}

// Carga inicial
loadSection(location.hash || "#about");

// Maneja cambios de hash
window.addEventListener("hashchange", () => {
  loadSection(location.hash);
});
