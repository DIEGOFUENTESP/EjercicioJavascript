var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
var nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));

if (nota4 === 5) {
  nota1 = Math.min(nota1 + 1, 5);
  nota2 = Math.min(nota2 + 1, 5);
  nota3 = Math.min(nota3 + 1, 5);
}

var notaFinal = (nota1 * 0.1) + (nota2 * 0.2) + (nota3 * 0.3) + (nota4 * 0.4);
notaFinal = Math.min(notaFinal, 5); 

if (notaFinal > 3.5) {
  console.log("El estudiante ganó con una nota final de: " + notaFinal.toFixed(2));
} else {
  console.log("El estudiante perdió con una nota final de: " + notaFinal.toFixed(2));
}