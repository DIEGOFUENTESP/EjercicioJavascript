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