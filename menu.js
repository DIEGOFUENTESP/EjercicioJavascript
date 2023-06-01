let contadorOpcion1 = 0;
let contadorOpcion2 = 0;
let contadorOpcion3 = 0;
let contadorOpcion4 = 0;
let contadorOpcion5 = 0;
let contadorOpcion6 = 0;
repetir = true ;
while (repetir) { 
  opcion = parseInt(prompt("Resolva algunos ejercicios: \n 1. Ordenar tres números ingresador por teclado de mayor a menor y viceversa. \n 2. Calcular el área de una circunferencia. \n 3. Conocer qué tipo de triángulo es ingresando por teclado cada uno de sus lados. \n 4. Ingresar dos números por teclado y saber si un número es amigo del otro. \n 5. Ingresar un valor de compra y una cantidad (la cantidad equivale al mismo producto) y mostrar por consola el valor de la compra. \n 6. Ingresar 4 notas de un estudiante y saber si ganó o perdió la materia. \n 7. Salir "));

  switch (opcion) {
    case 1:
        var num1 = parseInt(prompt("Ingrese el primer número:"));
        var num2 = parseInt(prompt("Ingrese el segundo número:"));
        var num3 = parseInt(prompt("Ingrese el tercer número:"));
        
        //De menor a mayor
        if (num1 <= num2 && num1 <= num3) {
            if (num2 <= num3) {
            console.log(num1, num2, num3);
        } else {
            console.log(num1, num3, num2);
        }
        } else if (num2 <= num1 && num2 <= num3) {
        if (num1 <= num3) {
            console.log(num2, num1, num3);
        } else {
            console.log(num2, num3, num1);
        }
        } else {
        if (num1 <= num2) {
            console.log(num3, num1, num2);
        } else {
            console.log(num3, num2, num1);
        }
        }

        //De mayor a menor
        if (num1 >= num2 && num1 >= num3) {
            if (num2 >= num3) {
            console.log(num1, num2, num3);
            } else {
            console.log(num1, num3, num2);
            }
        } else if (num2 >= num1 && num2 >= num3) {
            if (num1 >= num3) {
            console.log(num2, num1, num3);
            } else {
            console.log(num2, num3, num1);
            }
        } else {
            if (num1 >= num2) {
            console.log(num3, num1, num2);
            } else {
            console.log(num3, num2, num1);
            }
        }
        contadorOpcion1++;
        break;
    case 2:
        const pi = 3.1416;
        r = parseFloat(prompt("Ingresar el radio"));        
        a = pi*r;        
        console.log("El área es " + a.toFixed(2));
        contadorOpcion2++;
        break;
    case 3:
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
        contadorOpcion3++;
        break;
    case 4:
        const numero1 = parseInt(prompt("Ingrese el primer número: "));
        const numero2 = parseInt(prompt("Ingrese el segundo número: "));

        function calcularSumaDivisores(num) {
            let suma = 0;
            for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                    suma += i;
                }
            }
            return suma;
        }

        function sonAmigos(num1, num2) {
            const suma1 = calcularSumaDivisores(num1);
            const suma2 = calcularSumaDivisores(num2);

            if (suma1 === num2 && suma2 === num1) {
                return true;
            } else {
                return false;
            }
        }
        if (sonAmigos(numero1, numero2)) {
            console.log("Los números", numero1, "y", numero2, "son amigos.");
        } else {
            console.log("Los números", numero1, "y", numero2, "no son amigos.");
        }
        contadorOpcion4++;
        break;
    case 5:
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
        contadorOpcion5++;
        break;
    case 6:
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
        contadorOpcion6++;
        break;
    case 7:
        repetir = false;
        break;
        default:
        console.log("Opción inválida");
        break;
        }
        }

console.log("\n");
console.log("\n");        
console.log("Opción 1 se seleccionó " + contadorOpcion1 + " veces.");
console.log("Opción 2 se seleccionó " + contadorOpcion2 + " veces.");
console.log("Opción 3 se seleccionó " + contadorOpcion3 + " veces.");
console.log("Opción 4 se seleccionó " + contadorOpcion4 + " veces.");
console.log("Opción 5 se seleccionó " + contadorOpcion5 + " veces.");
console.log("Opción 6 se seleccionó " + contadorOpcion6 + " veces.");


const contadores = [contadorOpcion1, contadorOpcion2, contadorOpcion3, contadorOpcion4, contadorOpcion5, contadorOpcion6];

const indiceMaximo = contadores.indexOf(Math.max(...contadores));
const ejercicioMasVeces = `Ejercicio ${indiceMaximo + 1}`;

const indiceMinimo = contadores.indexOf(Math.min(...contadores));
const ejercicioMenosVeces = `Ejercicio ${indiceMinimo + 1}`;

console.log("\n");
console.log("\n");
console.log(`El ejercicio que se ejecutó más veces es ${ejercicioMasVeces}`);
console.log(`El ejercicio que se ejecutó menos veces es ${ejercicioMenosVeces}`);