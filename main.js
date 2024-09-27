import{ mostrarPrecio } from "./mostrarprecio.js";

const btn = document.getElementById("btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", (event) => {
  event.preventDefault();

 console.log(menu.selectedIndex);

});
btn.addEventListener("click", (event) => {
  event.preventDefault();
  
  console.log("Evento del botón funcionando")

  switch (menu.selectedIndex) {
    case 1:
      mostrarPrecio("img/helado.png", "Helado", "10.000");
      break;
    case 2:
      mostrarPrecio("img/hamburguesa.png", "Hamburguesa", "20.000");
      break;
    case 3:
      mostrarPrecio("img/perro.png", "Perro caliente", "18.000");
      break;
    case 4:
      mostrarPrecio("img/ensalada.png", "Ensalada", "15.000");
      break;
    default:
      alert("Debes seleccionar una opción del menú");
  }
});
