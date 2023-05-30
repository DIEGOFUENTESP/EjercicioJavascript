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