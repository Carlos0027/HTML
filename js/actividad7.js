let numero = parseInt(prompt("Introduce un número de dos dígitos:"));


if (numero >= 10 && numero <= 99) {
  let decenas = Math.floor(numero / 10); 
  let unidades = numero % 10;            

  document.writeln("los numeros ingresados son: " + numero + "<br>")
  document.writeln("las decenas son:" + decenas + "<br>")
  document.writeln("las unidades son:" + unidades )

} else {
  alert("Por favor, introduce un número de dos dígitos (entre 10 y 99).");
}

