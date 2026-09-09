const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}
