function comprobarB() {
  let contenedor = document.querySelector("#contenedor");
  contenedor.classList.remove("hidden");
  contenedor.classList.add("block");
}

function cerrarContenedor() {
  let contenedor = document.querySelector("#contenedor");
  contenedor.classList.remove("block");
  contenedor.classList.add("hidden");
}
