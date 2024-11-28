import Cl_articulo from './Cl_articulo.js';

export default class Cl_market {
    constructor() {
        this.articulos = [];
    }

    agregarArticulo(cod, nomb, tipo, costo) {
        const articulo = new Cl_articulo(cod, nomb, tipo, costo);
        this.articulos.push(articulo);
    }

    aPagarDetal(tipoEsp, porcIncremento) {
        let mensaje = "Factura al Detal:\n\n";
        let total = 0;

        this.articulos.forEach(articulo => {
            const precio = articulo.precio(tipoEsp, porcIncremento);
            mensaje += `${articulo.toString()} -> precio ${precio.toFixed(2)}\n`;
            total += precio;
        });

        mensaje += `\nTotal a pagar al detal: ${total.toFixed(2)}`;
        return {mensaje, total};
    }

    aPagarMayor(cantCadaArt) {
        let mensaje = "Factura al Mayor:\n\n";
        let total = 0;

        this.articulos.forEach(articulo => {
            const precio = articulo.precioCantidad(cantCadaArt);
            mensaje += `${articulo.toString()} -> precio ${(articulo.costo * 1.05).toFixed(2)}x${cantCadaArt} = ${precio.toFixed(2)}\n`;
            total += precio;
        });

        mensaje += `\nTotal a pagar al mayor: ${total.toFixed(2)}`;
        return {mensaje, total};
    }
}