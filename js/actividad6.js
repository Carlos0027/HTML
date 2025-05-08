let horas = prompt("ingresa las horas: ")
let minutos = prompt("ingresa los minutos ")

horas = parseInt(horas);    
minutos = parseInt(minutos);

let totalMinutos = (horas * 60) + minutos;
let segundos = totalMinutos * 60;

document.writeln("horas ingresadas: " + horas + "h" + "<br>")
document.writeln("minutos ingresados: " + minutos + "min" + "<br>")
document.writeln("los segundos en total son: " + segundos + "s" )