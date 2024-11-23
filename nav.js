const hamburguer = document.getElementById("hamburguer");
const nav = document.getElementById("nav");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  nav.classList.toggle("active");
});
