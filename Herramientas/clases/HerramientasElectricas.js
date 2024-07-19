import Herramientas from "./Herramientas.js";  

export default class HerramientasElectricas extends Herramientas {
    constructor(herramientas){
        super(herramientas)
    }
    estado() {
      return `Las herramientas eléctricas o electrónicas como ${this.herramientas} son de alta precisión`;
    }
  }