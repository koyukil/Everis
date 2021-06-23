import { Component } from '@angular/core';

import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productoArray: Producto[] = [
    {codigo:1, nombre: "manzana", precio:500, cantidad: 2, descripcion: "fruta", stock: 10},
    {codigo:2, nombre: "arroz", precio:3000, cantidad: 4, descripcion: "grano", stock: 50},
    {codigo:3, nombre: "pc", precio:2000000, cantidad: 1, descripcion: "torre", stock: 1}
  ];

  selectedProducto: Producto = new Producto(0,"",0,0,"",0);

  openForEdit(producto: Producto){
    this.selectedProducto = producto;
  } 

 addOrEdit(){
   

    if(this.selectedProducto.codigo === 0){
      this.selectedProducto.codigo = this.productoArray.length + 1;
      this.productoArray.push(this.selectedProducto);
    }
    this.selectedProducto = new Producto(0,"",0,0,"",0);

  }
  delete(){
    if(confirm("¿Estas seguro que deseas eliminarlo?")){
      this.productoArray = this.productoArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto(0,"",0,0,"",0);
    }
  }
  

}
