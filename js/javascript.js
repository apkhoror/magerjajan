let main = document.querySelector("main");

function toggleSearch() {
  let fokus = document.querySelector(".kotak-pencarian form input");

  main.classList.toggle("search-on");

  if (main.classList.contains("menu-on")) {
    main.classList.remove("menu-on");
  }

  if (main.classList.contains("search-on")) {
    fokus.focus();
  }
}

function toggleMenu() {
  if (main.classList.contains("search-on")) {
    main.classList.remove("search-on");
  }

  main.classList.toggle("menu-on");
}
