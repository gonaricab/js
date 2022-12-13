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
        text: 'No ingresaste nombre o apellido',
        icon: 'error',
        confirmButtonText: 'OK'
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
                text: 'No estás logueado',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }

/* mostrar cards */

function crearCards () {
    productos.forEach (productox => {
        x.innerHTML +=  `
        <div id="${productox.id}" class="card cardProducto" style="width: 18rem;">
        <img src="${productox.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${productox.producto}</h5>
        <p>Precio: $ ${productox.precio} </p>
        <button id="${productox.id}" class="btn btn-primary btn-dark">Agregar al carrito </button>
        </div>
        </div>`
       
    })

    const botonesAgregar = document.querySelectorAll(".btn-primary")

    botonesAgregar.forEach(boton => {
        boton.onclick = () =>{
            const productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))
            const productoCarrito = {...productoSeleccionado, cantidad:1}
            const indexCarrito = carrito.findIndex(prod=>prod.id === productoCarrito.id)
            if(indexCarrito === -1) {
                carrito.push(productoCarrito)
                Swal.fire({
                    title: 'Agregaste el siguiente producto:',
                    text: ` ${productoCarrito.producto}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
            else {
                carrito[indexCarrito].cantidad +=1
                Swal.fire({
                    title: 'Agregaste el siguiente producto:',
                    text: ` ${productoCarrito.producto}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
               
            }
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.log(carrito)
            actualizarCarrito()
        }
    })
}

/* chequea si existen prodcutos en el carrito en el localStorage */

const existeCarrito = JSON.parse(localStorage.getItem("carrito"))
let carrito 
if(existeCarrito) {
    carrito = existeCarrito
    actualizarCarrito()
}
else {carrito = []}

/* finalizar compra */

const finalizar = document.getElementById("finaliarCompra")

finalizar.onclick = () =>{
    if(carrito.length === 0) {

        Swal.fire({
            title: 'No hay productos en el Carrito',
            text: `Empieza a comprar!`,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else {
        const valores = carrito.map(prod => prod.precio * prod.cantidad)
        let = totalCompra = 0
        valores.forEach(valor => {
            totalCompra += valor
            Swal.fire({
                title: 'Finalizaste la compra',
                text: `Total de la compra: ${totalCompra}`,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }) 
        localStorage.removeItem("carrito")
        carrito.length = 0
        divCarrito.innerHTML = ``
    }
   
}

/* pone en pantalla los productos del carrito */

function actualizarCarrito () {
    let actualizar = ``
    carrito.forEach ((producto) => {
        actualizar += `
        <div class="inCarrito"> 
        <div>
        <img class="imagenCarrito" src="${producto.img}">
        </div>
        <div class="description">
        <h6>Producto: ${producto.producto}</h6>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}
        <button onclick = eliminarDelCarrito(${producto.id}) class="btn btn-dark">Eliminar</button>
        </div>
        </div>
        `
    })
    divCarrito.innerHTML = actualizar
}

/* vaciar Carrito */

const vaciarCarrito = document.getElementById("vaciarCarrito")
vaciarCarrito.onclick = () => {
    carrito.splice(0, carrito.length)
    localStorage.removeItem("carrito")
    actualizarCarrito()
    
}

/* eliminar del carrito y del localStorage el elemento en cuestión */

const eliminarDelCarrito = (id) => {
    indexProducto = carrito.findIndex((obj) => obj.id === id)
    let cantidadProducto = carrito[indexProducto].cantidad
    console.log(cantidadProducto)
    if(cantidadProducto === 1) {
        carrito.splice(indexProducto, 1)
        localStorage.setItem("carrito",JSON.stringify(carrito) )
        actualizarCarrito()
    }
    else {
        cantidadProducto--
        carrito[indexProducto].cantidad = cantidadProducto
        console.log(carrito)
        localStorage.setItem("carrito",JSON.stringify(carrito))
        actualizarCarrito()
    }
}
