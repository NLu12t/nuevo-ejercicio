/*El Market de la esquina procesa los artículos de las facturas para calcular el precio a pagar.

Un diseñador de APPs logra el siguiente diseño de clases:

Cl_articulo
 - codigo
 - nombre 
 - tipo
 - costo
 +constructor(cod, nomb, cost)
 +precio(tipo, porcIncremento)
 +precioCantidad(cantidad)

Especificaciones:
+precio(tipo, porcIncremento): retorna el costo con un 10% incremento, o con porcIncremento si el artículo es del tipo que viene por argumento.
+precioCantidad(cantidad): retorna el costo por cantidad, más un 5%

Cl_market
 -articulos: array[Cl_articulo]
+constructor()
+agregarArticulo(cod, nomb, tipo, costo)
+aPagarDetal(tipoEsp, porcIncremento)
+aPagarMayor(cantCadaArt)

Especificaciones:
+aPagarDetal(tipoEsp, porcIncremento): calcula el precio total de la factura considerando que el tipoEsp lleva el porcIncremento indicado
+aPagarMayor(cantCadaArt): calcula el monto de la factura considerando que se venden cantCadaArt por igual para todos los artículos

Se requiere un programa que procese los artículos de una factura,  y reporte el precio tanto de la factura al detal como de la factura al mayor 

El programa principal carga la instancia de la clase Market, con los datos de varios artículos. Luego pregunta el tipo de artículo especial, el % incremento y la cantidad de artículos para una venta al mayor.

El programa reporta el precio a pagar tanto como si fuera venta al detal como venta al mayor.

Ej. Suponiendo los artículos: 
111, 1, jabón, 10
222, 3, crema, 20
333, 1, pasta, 40
444, 2, harina, 30

Y también sabiendo que el artículo especial es tipo 1, el porcIncremento es 20 y la cantCadaArt es 3, entonces las facturas serían asi:

Al detal: 
111, 1, jabón, 10 -> precio 12
222, 3, crema, 20 -> precio 22
333, 1, pasta, 40 -> precio 48
444, 2, harina, 30 -> precio 33

aPagarDetal= 115

Al mayor: 
111, 1, jabón, 10 -> precio 10.5x3 = 31.5
222, 3, crema, 20 -> precio 21x3 = 63
333, 1, pasta, 40 -> precio 42x3 = 126
444, 2, harina, 30 -> precio 31.5x3 = 94.5

aPagarMayor = 314.5 */

import Cl_market from "./Cl_market.js";

// Crear instancia de Market
const market = new Cl_market();

// Función para agregar un nuevo artículo
function agregarNuevoArticulo() {
    const codigo = parseInt(prompt("Ingrese el código del artículo:"));
    const nombre = prompt("Ingrese el nombre del artículo:");
    const tipo = parseInt(prompt("Ingrese el tipo del artículo (1, 2 o 3):"));
    const costo = parseFloat(prompt("Ingrese el costo del artículo:"));
    
    market.agregarArticulo(codigo, nombre, tipo, costo);
}

// Agregar artículos iniciales
market.agregarArticulo(111, "jabón", 1, 10);
market.agregarArticulo(222, "crema", 3, 20);
market.agregarArticulo(333, "pasta", 1, 40);
market.agregarArticulo(444, "harina", 2, 30);

// Menú principal
while (true) {
    const opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Agregar nuevo artículo\n" +
        "2. Calcular precio al detal\n" +
        "3. Calcular precio al mayor\n" +
        "4. Salir"
    );

    if (opcion === "4") break;

    switch (opcion) {
        case "1":
            agregarNuevoArticulo();
            break;
        case "2":
            const tipoEspecial = parseInt(prompt("Ingrese el tipo especial:"));
            const porcIncremento = parseInt(prompt("Ingrese el porcentaje de incremento:"));
            const resultadoDetal = market.aPagarDetal(tipoEspecial, porcIncremento);
            alert(resultadoDetal.mensaje);
            document.getElementById("salida").innerHTML += resultadoDetal.mensaje + "<br><br>";
            break;
        case "3":
            const cantidadMayor = parseInt(prompt("Ingrese la cantidad para venta al mayor:"));
            const resultadoMayor = market.aPagarMayor(cantidadMayor);
            alert(resultadoMayor.mensaje);
            document.getElementById("salida").innerHTML += resultadoMayor.mensaje + "<br><br>";
            break;
        default:
            alert("Opción no válida");
    }
}

/*
import Cl_market from "./Cl_market.js";

// Crear instancia de Market
const market = new Cl_market();

// Agregar artículos
market.agregarArticulo(111, "jabón", 1, 10);
market.agregarArticulo(222, "crema", 3, 20);
market.agregarArticulo(333, "pasta", 1, 40);
market.agregarArticulo(444, "harina", 2, 30);

// Datos para el cálculo
const tipoEspecial = 1;
const porcIncremento = 20;
const cantidadMayor = 3;

// Calcular precios
const resultadoDetal = market.aPagarDetal(tipoEspecial, porcIncremento);
const resultadoMayor = market.aPagarMayor(cantidadMayor);

// Mostrar resultados
alert(resultadoDetal.mensaje);
alert(resultadoMayor.mensaje);

// También mostrar en el div de salida para referencia
const salida = document.getElementById("salida");
salida.innerHTML = `
    <pre>
${resultadoDetal.mensaje}

${resultadoMayor.mensaje}
    </pre>
`;
*/