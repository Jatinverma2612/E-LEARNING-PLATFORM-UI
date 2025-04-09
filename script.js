const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const searchInput = document.getElementById("searchInput");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  document.querySelectorAll(".course-card").forEach((card) => {
    const title = card.dataset.title?.toLowerCase();
    if (!title || title.includes(term)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
