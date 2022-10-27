function funcion (variable1,variable2) {
    let x = variable1 * variable2
    alert ("El total de tu compra es: " + x)
}
let eleccion = parseInt (prompt("Selecciona un producto: 1-iphone ($500) 2-PC($1000) 3-tablet($800)\nPresiona cualquier otra letra para salir"))
let producto 
let decision = true
while (decision = true){
    if (eleccion === 1) {
        producto = 500
        let cantidad = parseInt (prompt ("Indica la cantidad del producto:"))
        funcion (producto, cantidad)
        break
    }
    else if (eleccion === 2) {
        producto = 1000
        let cantidad = parseInt (prompt ("Indica la cantidad del producto:"))
        funcion (producto, cantidad)
        break
    }
    else if (eleccion === 3) {
        producto = 800
        let cantidad = parseInt (prompt ("Indica la cantidad del producto:"))
        funcion (producto, cantidad)
        break
    }
    else {
        alert ("Saliste!")
        decision = false
        break
    }
}


