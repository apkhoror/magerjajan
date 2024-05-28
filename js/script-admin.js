const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle"),
  menuToggle = body.querySelector(".menu-sidebar"),
  nav = body.querySelector("nav");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("close");
// });
