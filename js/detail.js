const beli = document.getElementById("beli");
const namaMakanan = document.getElementById("bakso");

const pesan = `Hallo om, saya mau pesan ${namaMakanan.innerText}`;

beli.addEventListener("click", () => {
  window.location.href = `http://wa.me/6283894349952?text="${encodeURIComponent(pesan)}"`;
  //   window.open = `http://wa.me/6283894349952?text=${encodeURIComponent(pesan)}`;
});
