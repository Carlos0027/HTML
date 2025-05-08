let a = prompt("Ingresa el valor de la variable a:");
let b = prompt("Ingresa el valor de la variable b:");

document.writeln("Antes:<br>");
document.writeln("a = " + a + "<br>");
document.writeln("b = " + b + "<br>");

let temp = a;
a = b;
b = temp;

document.writeln("Después:<br>");
document.writeln("a = " + a + "<br>");
document.writeln("b = " + b + "<br>");