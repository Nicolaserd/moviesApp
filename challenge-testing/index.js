class CarritoCompra{

    constructor(){
        this.carrito=[]
    }
    agregarProducto(producto){
        this.carrito.push(producto);
    }
    calcularTotal(){
        let totalCompra=0;
        this.carrito.forEach(producto => {
            totalCompra=totalCompra+(producto.price*producto.quantity);
        });
        return totalCompra;
    }
    aplicarDescuento(porcentaje){

         const total  = this.calcularTotal();
         const descuento =  total-(total*(porcentaje/100));
         return descuento;
    }
};


module.exports=CarritoCompra;