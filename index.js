function funcion (variable1,variable2) {
    let x = variable1 * variable2  
    alert ("Valor de la compra " + x)
}

let productoSeleccionado = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
let seguirComprando = true
let decision
const productosExistentes = []

class Producto {
    constructor (id, producto, precio) {
        this.id = id
        this.producto = producto
        this.precio = precio
    }
}

const iphone = new Producto (1, "iphone", 500)
productosExistentes.push (iphone)
const tv = new Producto (2, "tv", 300)
productosExistentes.push (tv)
const ipad = new Producto (3, "ipad", 800)
productosExistentes.push (ipad)
const pc = new Producto (4, "pc", 1000)
productosExistentes.push (pc)


const productoCliente = productosExistentes.find (producto => producto.id === productoSeleccionado)


while (seguirComprando === true) {
    if(productoCliente) {
        let cantidad = parseInt(prompt("Indica cantidad:")) 
        funcion (productoCliente.precio, cantidad)
    }
    else {
        productoSeleccionado = parseInt(prompt ("Productos habilitados: 1. Iphone - 2. TV - 3. Ipad - 4. PC"))

    }
    decision = parseInt (prompt ("Deseas seguir comprando? 1-Sí 2-No"))
    if (decision === 1){
        productoSeleccionado = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
    }
    else {
        seguirComprando = false
    }

}

   


 
  