import Herramientas from "./clases/Herramientas.js";
import HerramientasElectricas from "./clases/HerramientasElectricas.js";
import HerramientasMecanicas from "./clases/HerramientasMecanicas.js";

let ArregloEstado = [
  new Herramientas("El Martillo"),
  new HerramientasMecanicas("La Llave Inglesa"),
  new HerramientasElectricas("El Taladro"),
];


let seccionResultados = document.querySelector("#resultados");


ArregloEstado.forEach((herramienta) => {
  let p = document.createElement("p");
  p.textContent = herramienta.estado();
  seccionResultados.appendChild(p);
});
