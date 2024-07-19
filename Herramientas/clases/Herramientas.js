export default class Herramientas {
    constructor(herramientas){
        this.herramientas=herramientas
    }
    estado() {
      return `Las herramientas como ${this.herramientas} son necesarias para tareas de mantenimiento`;
    }
  }
