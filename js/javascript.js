let main = document.querySelector("main");
const cari = document.querySelector(".search");

cari.addEventListener("click", () => {
  let fokus = document.querySelector(".kotak-pencarian form input");

  main.classList.toggle("search-on");

  if (main.classList.contains("menu-on")) {
    main.classList.remove("menu-on");
  }

  // if (main.classList.contains("search-on")) {
  //   fokus.focus();
  // }
});

// function toggleMenu() {
//   if (main.classList.contains("search-on")) {
//     main.classList.remove("search-on");
//   }
//   main.classList.toggle("menu-on");
// }

// Fitur Pencarian
// const searching = document.querySelector("#cari");

// searching.addEventListener("click", (e) => {
//   const input = document.getElementById("inputCari").value.toLowerCase();
//   // || item.deskripsi.toLowerCase().includes(input)
//   window.location.href = `pengembangan.html`;
//   // tampilkanHasilnya(results);
//   e.preventDefault();
// });
