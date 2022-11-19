function funcion (variable1,variable2) {
    return  variable1 * variable2  
    
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

while (seguirComprando === true) {
    const productoCliente = productosExistentes.find (producto => producto.id === productoSeleccionado)
    console.log (productoCliente)
    if(productoCliente) {
        let cantidad = parseInt(prompt("Indica cantidad:")) 
        let x = funcion (productoCliente.precio, cantidad)
        let i = productoCliente.producto
        let y = productoCliente.precio 
        let productoMasBarato = productosExistentes.filter (producto => producto.precio < productoCliente.precio)
        let h = []
        productoMasBarato.forEach (elemento => h.push (elemento.producto))
        console.log (productoMasBarato)
        console.log (h)
        if (productoMasBarato.length > 0) {
            alert (`Valor de la compra: ${x} dolares.\nCompraste: ${i}.\nExisten estos productos mas baratos: ${h.join(", ")}.`)
        }
        else {
            alert (`Valor de la compra: ${x} dolares. \nCompraste ${i}.\nNo existen productos mas baratos.`)
        }
    }
    else {
        productoSeleccionado = parseInt(prompt ("Productos habilitados: 1. Iphone - 2. TV - 3. Ipad - 4. PC"))
        continue
    }
    decision = parseInt (prompt ("Deseas seguir comprando? 1-Sí 2-No"))
    if (decision === 1){
        productoSeleccionado = parseInt(prompt ("1. Iphone - 2. TV - 3. Ipad - 4. PC"));
    }
    else {
        seguirComprando = false
    }

}

   


 
  