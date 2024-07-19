import Herramientas from "./Herramientas.js";

export default class HerramientasMecanicas extends Herramientas {
    constructor(herramientas){
        super (herramientas)
    }
    estado() {
      return `Las herramientas mecánicas como ${this.herramientas} son básicas y manejables`;
    }
  }