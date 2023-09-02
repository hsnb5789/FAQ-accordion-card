const active = document.querySelectorAll(".QA");

active.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
