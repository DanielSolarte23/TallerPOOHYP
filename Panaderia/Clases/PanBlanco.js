import Panaderia from "./Panaderia.js";

export default class PanBlanco extends Panaderia {
    constructor(insumoPrincipal, cantidadProducida, costoProduccion) {
        super("Pan Blanco", insumoPrincipal, cantidadProducida, costoProduccion);
    }

    PanBlanco() {
        console.log(`Produccion de pan Blanco ${this.cantidadProducida} unidades`);
    }
}
