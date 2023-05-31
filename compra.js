let valorCompra = parseFloat(prompt("Ingrese el valor de compra:"));
let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

let valorTotalCompra = valorCompra * cantidad;
let iva = valorTotalCompra * 0.19;

console.log("Valor total de la compra: " + valorTotalCompra);
console.log("Valor del IVA (19%): " + iva);

if (valorTotalCompra >= 1000000) {
    const descuento = valorTotalCompra * 0.1;
    valorTotalCompra -= descuento;
    console.log("Se aplicó un descuento del 10%.");
    console.log("Nuevo valor total de la compra: " + valorTotalCompra);
  }else if (valorTotalCompra >= 500000) {
    console.log("Se le devolverá el valor del IVA.");
    valorTotalCompra -= iva;
    console.log("Nuevo valor total de la compra: " + valorTotalCompra);
  }


