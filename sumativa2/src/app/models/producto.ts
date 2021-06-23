export class Producto {
    
        codigo: number 
        nombre: String 
        precio : number 
        cantidad: number; 
        descripcion: String; 
        stock: number;


    constructor(codigo: number,  nombre: String,  precio : number, cantidad: number, descripcion: String, stock: number){
        this.codigo =  codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}
