import Silos from "./clases/Silos.js";

const silo = new Silos("Maíz", 1000, "Cliente A", 30, 5);

let seccionResultados = document.querySelector("#resultados");
function agregarResultado(silo) {
    let p = document.createElement("p");
    p.textContent = `Tipo de Grano: ${silo.getTipoGrano()}, Cantidad Almacenada: ${silo.getCantidad()}, Cliente: ${silo.getCliente()}, Días de Almacenamiento: ${silo.getDiasAlmacenamiento()}, Mes de Almacenamiento: ${silo.getMesAlmacenamiento()}, Costo Total: ${silo.calcularCosto()} pesos`;
    seccionResultados.appendChild(p);
}

// Agregar el resultado a la sección
agregarResultado(silo);
