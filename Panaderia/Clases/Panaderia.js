export default class Panaderia {
    constructor(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion) {
        this.tipoPan = tipoPan;
        this.insumoPrincipal = insumoPrincipal;
        this.cantidadProducida = cantidadProducida;
        this.costoProduccion = costoProduccion;
    }

    getTipoPan() {
        return this.tipoPan;
    }

    getInsumoPrincipal() {
        return this.insumoPrincipal;
    }

    getCantidadProducida() {
        return this.cantidadProducida;
    }

    getCostoProduccion() {
        return this.costoProduccion;
    }

    setTipoPan(tipoPan) {
        this.tipoPan = tipoPan;
    }

    setInsumoPrincipal(insumoPrincipal) {
        this.insumoPrincipal = insumoPrincipal;
    }

    setCantidadProducida(cantidadProducida) {
        this.cantidadProducida = cantidadProducida;
    }

    setCostoProduccion(costoProduccion) {
        this.costoProduccion = costoProduccion;
    }

    Panaderia() {
        console.log("Bienvenido a la panadería");
    }
}
