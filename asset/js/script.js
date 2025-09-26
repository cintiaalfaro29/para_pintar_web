/* nav */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});
/* nav colors */
const colors = [
  "#FFD1DC",
  "#A2CFFE",
  "#AAF0D1",
  "#FFFACD",
  "#FFDAB9",
  "#DCD0FF",
  "#abc4ff",
  "#ffee93",
  "#ffee93",
  "#7ec4cf",
  "#ffb3c6",
  "#adf7b6",
  "#9cf6f6",
];
let change = 0; /* funcion temporizador setInterval(funcion_a_ejecutar , intervalo_en_milisegundos) */
function changeColorsTime(segundos) {
  setInterval(() => {
    const navColors = document.getElementById("headerColors");
    const divColors = document.getElementById("h1Colors");
    const footerColors = document.getElementById("footerColors");
    const textoColors = document.getElementById("h2Colors");
    navColors.style.backgroundColor = colors[change];
    divColors.style.backgroundColor = colors[change];
    footerColors.style.backgroundColor = colors[change];
    textoColors.style.color = colors[change];
    change = (change + 1) % colors.length;
  }, segundos * 1000);
}
changeColorsTime(2);
