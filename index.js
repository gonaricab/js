const nombre = document.getElementById("inputNombre")
const apellido = document.getElementById("inputApellido")
const boton = document.getElementById("boton")
const loguin = document.getElementById("loguin")
const bienvenido = document.getElementById("bienvenido")
const divDos = document.getElementById("divDos")

const carrito = []
class Producto {
    constructor (id, producto, precio) {
        this.id = id
        this.producto = producto
        this.precio = precio
    }
}
const iphone = new Producto (0, "iphone", 500)

const tv = new Producto (1, "tv", 300)

const ipad = new Producto (2, "ipad", 800)

const pc = new Producto (3, "pc", 1000)

const productos = [iphone,tv,ipad,pc]

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

divDos.innerHTML = `<select id="select"></select>
    <button id="agregar">Agregar al Carrito</button>
    <button id="comprar">Comprar</button>`
productos.forEach((producto)=>{
    const optionProd = document.createElement("option")
    optionProd.innerText = `${producto.producto}${producto.precio}`
    select.append(optionProd)
}
)
const botonAgregar = document.getElementById("agregar")
const selectProds = document.getElementById("select")
const botonComprar = document.getElementById("comprar")
botonAgregar.onclick = () => {
    const indexProducto = selectProds.selectedIndex
    const productoSeleccionado = productos[indexProducto]
    carrito.push(productoSeleccionado)
    console.log(carrito)
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

botonComprar.onclick = () => {
    const carritoValor = JSON.parse(localStorage.getItem("carrito"))
    carritoValor.forEach((element) => {
    precioTotal = precioTotal + element.precio  
    })
    alert (precioTotal)
    console.log(carritoValor)
}









