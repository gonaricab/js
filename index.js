function funcion (variable1,variable2) {
    let x = variable1 * variable2  
    alert (x)
}

let producto = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
let seguirComprando = true
let decision
while (seguirComprando === true) {
    if (producto === 1) {
        let cantidad = parseInt(prompt("Indica cantidad:")) 
        funcion (500, cantidad)
    }
    else if (producto === 2) {
        let cantidad = parseInt(prompt("Indica cantidad:"))
        funcion (300,cantidad)
    }
    else if (producto === 3) {
        let cantidad = parseInt(prompt("Indica cantidad:"))
        funcion (800,cantidad)
    }
    else if (producto === 4) {
        let cantidad = parseInt(prompt("Indica cantidad:"))
        funcion (1000,cantidad)
    }
    else {
        producto = parseInt(prompt ("Producto habilitado: 1. Iphone - 2. TV - 3. Ipad - 4. PC"))
    }
    decision = parseInt (prompt ("Deseas seguir comprando? 1-Sí 2-No"))
    if (decision === 1){
        producto = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
    }
    else {
        seguirComprando = false
    }
}

