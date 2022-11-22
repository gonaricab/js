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

const carrito = []

const selectProds = document.getElementById("select")
const botonAgregar = document.getElementById("agregar")

productos.forEach((producto)=> {
  const optionProd = document.createElement("option")
  optionProd.innerText = `${producto.producto}: ${producto.precio}`
  selectProds.append(optionProd)
})

botonAgregar.onclick = () => {
  const indexProducto = selectProds.selectedIndex
  const productoSeleccionado = productos[indexProducto]
  carrito.push (productoSeleccionado)
  console.log(carrito)
}