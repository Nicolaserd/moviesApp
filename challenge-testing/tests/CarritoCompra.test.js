
const CarritoCompra = require("../index")
describe("Carrito  se inicializo correctamente como clase Carrito compra",()=>{
    //instancia 
   it("crea una instancia de carrito compra",()=>{
    const carrito = new CarritoCompra();
    expect(carrito).toBeInstanceOf(CarritoCompra);
   }) ;
   
   it("crea una instancia de carrito compra agrega y calcula el precio debe ser 20",()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({name:"a", price:2, quantity: 10});
    const total = carrito.calcularTotal();
    expect(total).toBe(20);
   }) ;
   it("crea una instancia de carrito compra agrega y calcula el precio debe ser 80",()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({name:"a", price:2, quantity: 10});
    carrito.agregarProducto({name:"b", price:2, quantity: 10});
    carrito.agregarProducto({name:"c", price:2, quantity: 20});
    const total = carrito.calcularTotal();
    expect(total).toBe(80);
   }) ;
   it("crea una instancia de carrito compra agrega y calcula el  descuento del 20% osea 80 el total",()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({name:"a", price:2, quantity: 10});
    carrito.agregarProducto({name:"b", price:2, quantity: 10});
    carrito.agregarProducto({name:"c", price:2, quantity: 30});
    const total = carrito.aplicarDescuento(20);
    expect(total).toBe(80);
   }) ;
   it("crea una instancia de carrito compra agrega y calcula el  descuento del 50% osea 25 el total",()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({name:"a", price:2, quantity: 0});
    carrito.agregarProducto({name:"b", price:2, quantity: 0});
    carrito.agregarProducto({name:"c", price:1, quantity: 50});
    const total = carrito.aplicarDescuento(50);
    expect(total).toBe(25);
   }) ;
})

