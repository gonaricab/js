const nombre = document.getElementById("inputNombre")
const apellido = document.getElementById("inputApellido")
const boton = document.getElementById("boton")
const loguin = document.getElementById("loguin")
const bienvenido = document.getElementById("bienvenido")
const divDos = document.getElementById("divDos")
const divTres = document.getElementById("divTres")
const enCarrito = document.getElementById("enCarrito")
let carrito = []
class Producto {
    constructor (id, producto, precio) {
        this.id = id
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

const productos = [iphone,tv,ipad,pc, reloj, monitor]

let precioTotal = 0

boton.onclick = () => {
    const datos =  {
        nombre: nombre.value,
        apellido: apellido.value
    }
    localStorage.setItem("datos", JSON.stringify(datos))
    loguin.remove()
    const saludo = document.createElement ("h2")
    saludo.innerText = `Bienvenido ${datos.nombre} ${datos.apellido}`
    bienvenido.append(saludo)
    
}

divDos.innerHTML = `
    <div class="productos">
    <h7>Productos:</7>
    <select id="select"></select>
    <button id="agregar">Agregar al Carrito</button>
    <button id="comprar">Comprar</button>
    <button id="vaciar">Vaciar Carrito</button>
    <div>`
    
productos.forEach((producto)=>{
    const optionProd = document.createElement("option")
    optionProd.innerText = `${producto.producto} - Precio: $ ${producto.precio}`
    select.append(optionProd)
}
)

const botonAgregar = document.getElementById("agregar")
const selectProds = document.getElementById("select")
const botonComprar = document.getElementById("comprar")
const vaciarCarrito = document.getElementById("vaciar")
const ul = document.getElementById("ul")
const carritoVacio = document.getElementById("carritoVacio")

botonAgregar.onclick = () => {
    carritoVacio.innerText = ("")
    const indexProducto = selectProds.selectedIndex
    const productoSeleccionado = productos[indexProducto]
    carrito.push(productoSeleccionado)
    console.log(carrito)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    x = JSON.parse(localStorage.getItem("carrito"))
    const listItem = document.createElement("li")
    listItem.innerText = `${productoSeleccionado.producto} - Precio: $ ${productoSeleccionado.precio}`
    ul.append(listItem)
    
}
vaciarCarrito.onclick = () => {
    x = JSON.parse(localStorage.getItem("carrito"))
    if (x) {
        localStorage.removeItem("carrito")
        carrito = []
        document.getElementById("ul").innerHTML = ""
    }
}

botonComprar.onclick = () => {
  const carritoValor = JSON.parse(localStorage.getItem("carrito"))
  if (carritoValor === null) {
    carritoVacio.innerText = ("El carrito está vacío")
  }
  else {
    carritoValor.forEach((element) => {
    precioTotal = precioTotal + element.precio  
    })
    botonAgregar.remove()
    selectProds.remove()
    botonComprar.remove()
    divDos.innerHTML = `<h2>Compra Final: Total: ${precioTotal} dólares </h2>`
}
localStorage.removeItem("carrito")
}












