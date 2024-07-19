export default class Silos {
    constructor(tipoGrano, cantidad, cliente, diasAlmacenamiento, mesAlmacenamiento) {
        this.tipoGrano = tipoGrano;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.diasAlmacenamiento = diasAlmacenamiento;
        this.mesAlmacenamiento = mesAlmacenamiento;
        this.costoBasicoPorDia = 100;
    }

    getTipoGrano() {
        return this.tipoGrano;
    }

    getCantidad() {
        return this.cantidad;
    }

    getCliente() {
        return this.cliente;
    }

    getDiasAlmacenamiento() {
        return this.diasAlmacenamiento;
    }

    getMesAlmacenamiento() {
        return this.mesAlmacenamiento;
    }

    setTipoGrano(tipoGrano) {
        this.tipoGrano = tipoGrano;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    setCliente(cliente) {
        this.cliente = cliente;
    }

    setDiasAlmacenamiento(diasAlmacenamiento) {
        this.diasAlmacenamiento = diasAlmacenamiento;
    }

    setMesAlmacenamiento(mesAlmacenamiento) {
        this.mesAlmacenamiento = mesAlmacenamiento;
    }

    calcularCosto() {
        let costoBase = this.diasAlmacenamiento * this.costoBasicoPorDia;
        let adicional = 0;

        if (this.mesAlmacenamiento >= 1 && this.mesAlmacenamiento <= 6) {
            adicional = 15000;
        } else if (this.mesAlmacenamiento >= 7 && this.mesAlmacenamiento <= 12) {
            adicional = 25000;
        }

        return costoBase + adicional;
    }

    Silos() {
        console.log("Bienvenido al sistema de almacenamiento de silos");
    }
}