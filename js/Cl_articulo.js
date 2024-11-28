export default class Cl_articulo {
    constructor(cod, nomb, tipo, cost) {
        this.codigo = cod;
        this.nombre = nomb;
        this.tipo = tipo;
        this.costo = cost;
    }

    precio(tipo, porcIncremento) {
        if (this.tipo === tipo) {
            return this.costo + (this.costo * porcIncremento / 100);
        }
        return this.costo + (this.costo * 0.10); // 10% por defecto
    }

    precioCantidad(cantidad) {
        return (this.costo * cantidad) * 1.05; // precio por cantidad + 5%
    }

    ////

    toString() {
        return `${this.codigo}, ${this.tipo}, ${this.nombre}, ${this.costo}`;
    }
}