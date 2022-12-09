const ingreso = document.getElementById("ingreso")
const botonIngresar = document.getElementById("ingresar")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const bienvenido = document.getElementById("bienvenido")
const sinUsuario = document.getElementById("sinUsuario")
const volverIngresar = document.getElementById("volverIngresar")
const x = document.getElementById("productos")
const usuario = JSON.parse(localStorage.getItem("usuario"))
const divCarrito = document.getElementById("carrito")


/* funcion constructora  */
class Producto {
    constructor (id, img, producto, precio) {
        this.id = id
        this.img = img
        this.producto = producto
        this.precio = precio
    }
}

/* const iphone = new Producto (0, "Apple iPhone 14 Pro Max (1 TB) - Morado oscuro", 500)

const tv = new Producto (1, "Smart TV Samsung Series 7 4K 50", 300)

const ipad = new Producto (2, "Apple iPad Air de 10.9 WI-FI 64GB Gris espacia", 800)

const pc = new Producto (3, "Pc Armada Intel Core I5 8gb Ssd240 W10 Office", 1000)

const reloj = new Producto (4, "Apple Watch Series 3 (GPS) - Correa deportiva negro", 200)

const monitor = new Producto (5, "Monitor Led Samsung 24'' Con Diseño Sin Bordes ", 210)

const productos = [iphone,tv,ipad,pc, reloj, monitor]
 */

/* función para consulta JSON */

const productos = []

async function getProductos () {
    let res = await fetch ("productos.json")
    let response = await res.json ()
    response.forEach ((p) => {
        let productoNuevo = new Producto (p.id,p.img,p.producto,p.precio)
        productos.push (productoNuevo)
        
    } )  
    crearCards ()
}


getProductos ()


console.log (productos)
/* se fija si hay usuario en localStorage */
if(usuario) {
    mostrarBienvenida(usuario)
}

botonIngresar.onclick = () => {
    if(nombre.value || apellido.value) {
    const usuario =  {
        nombre: nombre.value,
        apellido: apellido.value
    }
    localStorage.setItem("usuario", JSON.stringify(usuario))
    mostrarBienvenida(usuario)
} 
else {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
}

function mostrarBienvenida(usuario){
    ingreso.remove()
    const saludo = document.createElement ("h2")
    saludo.setAttribute("class","d-flex justify-content-center")
    saludo.innerText = `Bienvenido ${usuario.nombre} ${usuario.apellido}`
    bienvenido.append(saludo)
}

/* funcion logout */
const logOut = document.getElementById("logOut")
    logOut.onclick = () => {
        const usuario = JSON.parse(localStorage.getItem("usuario"))
        if(usuario) {
            localStorage.removeItem("usuario")
            location.reload()
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        
    }

/* mostrar cards */
function crearCards () {
    productos.forEach (productox => {
        x.innerHTML +=  `
        <div id="${productox.id}" class="card cardProducto" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${productox.producto}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button id="${productox.id}" class="btn btn-primary">Agregar al carrito </button>
        </div>
        </div>`
       
    })
    const botonesAgregar = document.querySelectorAll(".btn-primary")
    botonesAgregar.forEach(boton => {
        boton.onclick = () =>{
            const listaProductos = document.getElementById("listaProductos")
            const productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))
            const productoCarrito = {...productoSeleccionado, cantidad:1}
            const indexCarrito = carrito.findIndex(prod=>prod.id === productoCarrito.id)
            if(indexCarrito=== -1) {
                carrito.push(productoCarrito)
                
            }
            else {
                carrito[indexCarrito].cantidad +=1
               
            }
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.log(carrito)
            actualizarCarrito()
        }
    })
}


const existeCarrito = JSON.parse(localStorage.getItem("carrito"))
let carrito 
if(existeCarrito) {
    carrito = existeCarrito
    actualizarCarrito()
}
else {carrito = []}


const finalizar = document.getElementById("finaliarCompra")

finalizar.onclick = () =>{
    const valores = carrito.map(prod => prod.precio * prod.cantidad)
    let = totalCompra = 0
    valores.forEach(valor => {
        totalCompra += valor
    }) 
    console.log(totalCompra)
}

function actualizarCarrito () {
    let actualizar = ``
    carrito.forEach ((producto) => {
        actualizar += `
        <h6>Producto: ${producto.producto}</h6>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}
        `
    })
    divCarrito.innerHTML = actualizar
}
