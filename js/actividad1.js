function calcularPrecioIva(){
    let precio = parseInt(document.getElementById("precio").value)
    let iva = parseInt(document.getElementById("iva").value)

    if(!isNaN(precio) && !isNaN(iva)){
        let precioTotal = precio + (precio * iva / 100)
        document.getElementById("mostrar").innerHTML = "El precio total es de: " + precioTotal
    }else{
        alert("pasaste una cadena en ves de un numero")
    }
}