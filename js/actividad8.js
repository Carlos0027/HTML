let personas = parseInt(prompt("Ingresa la cantidad de personas:"));
let kilos = parseFloat(prompt("Ingresa los kilos de papa:"));


if (personas >= 0 && personas <= 99) {
let cebolla = 300; 
let huevos = 5;    
let gramos_papa = 200; 

let total_g_papa = gramos_papa * personas;
let total_huevos = kilos * huevos;
let total_cebolla = kilos * cebolla;

document.writeln("Personas: " + personas + "<br>");
document.writeln("Kilos de papa: " + kilos + "<br>");
document.writeln("Gramos de papa en total: " + total_g_papa + "<br>");
document.writeln("Huevos que se van a utilizar: " + total_huevos + "<br>");
document.writeln("Gramos de cebolla: " + total_cebolla + "<br>");
}
else {
    alert("Por favor, introduce un número de personas (entre 0 y 99).");
  }