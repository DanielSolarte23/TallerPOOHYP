import Panaderia from "./Panaderia.js";

export default class PanIntegral extends Panaderia {
    constructor(insumoPrincipal, cantidadProducida, costoProduccion) {
        super("Pan Integral", insumoPrincipal, cantidadProducida, costoProduccion);
    }

    PanIntegral() {
        console.log(`Produccion de pan integral ${this.cantidadProducida} unidades`);
    }
}
