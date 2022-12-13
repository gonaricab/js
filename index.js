function funcion (variable1,variable2) {
    let x = variable1 * variable2  
    alert ("Valor de la compra " + x)
}

let productoSeleccionado = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
let seguirComprando = true
let decision
const productosExistentes = []

class Producto {
    constructor (id, img, producto, precio) {
        this.id = id
        this.img = img
        this.producto = producto
        this.precio = precio
    }
}
const iphone = new Producto (0, "Apple iPhone 14 Pro Max (1 TB) - Morado oscuro", 500)

const tv = new Producto (1, "Smart TV Samsung Series 7 4K 50", 300)

const ipad = new Producto (2, "Apple iPad Air de 10.9 WI-FI 64GB Gris espacia", 800)

const pc = new Producto (3, "Pc Armada Intel Core I5 8gb Ssd240 W10 Office", 1000)

const reloj = new Producto (4, "Apple Watch Series 3 (GPS) - Correa deportiva negro", 200)

const monitor = new Producto (5, "Monitor Led Samsung 24'' Con Diseño Sin Bordes ", 210)

const iphone = new Producto (1, "iphone", 500)
productosExistentes.push (iphone)
const tv = new Producto (2, "tv", 300)
productosExistentes.push (tv)
const ipad = new Producto (3, "ipad", 800)
productosExistentes.push (ipad)
const pc = new Producto (4, "pc", 1000)
productosExistentes.push (pc)

while (seguirComprando === true) {
    const productoCliente = productosExistentes.find (producto => producto.id === productoSeleccionado)
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

   


 
  