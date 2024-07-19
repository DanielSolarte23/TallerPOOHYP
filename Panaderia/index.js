import Panaderia from "./Clases/Panaderia.js";
import PanBlanco from "./Clases/PanBlanco.js";
import PanIntegral from "./Clases/PanIntegral.js";


const panaderia = new Panaderia("Pan Genérico", "Harina", 100, 50);
const panBlanco = new PanBlanco("Harina de Trigo", 200, 100);
const panIntegral = new PanIntegral("Harina Integral", 150, 120);


let seccionResultados = document.querySelector("#resultados");


function agregarResultado(pan) {
    let p = document.createElement("p");
    p.textContent = `Tipo de Pan: ${pan.getTipoPan()}, Insumo Principal: ${pan.getInsumoPrincipal()}, Cantidad Producida: ${pan.getCantidadProducida()}, Costo de Producción: ${pan.getCostoProduccion()}`;
    seccionResultados.appendChild(p);
}


agregarResultado(panaderia);
agregarResultado(panBlanco);
agregarResultado(panIntegral);
