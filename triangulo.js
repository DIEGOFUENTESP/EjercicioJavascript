var lado1 = parseInt(prompt("Ingrese el primer lado del triángulo:"));
var lado2 = parseInt(prompt("Ingrese el segundo lado del triángulo:"));
var lado3 = parseInt(prompt("Ingrese el tercer lado del triángulo:"));


if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}