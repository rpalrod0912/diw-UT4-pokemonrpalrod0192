const boton = document.querySelector("#modoLuz");
const claseBody = document.querySelector(".theme");

function cambiarModo() {
  document.querySelector(".theme").className = ".theme--dark";
}

boton.addEventListener("click", cambiarModo);
