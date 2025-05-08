let numero = parseInt(prompt("Ingresa un número:"));

let mensaje = (numero % 2 === 0 && "es par") || "es impar";

document.writeln("El número " + numero + " " + mensaje);