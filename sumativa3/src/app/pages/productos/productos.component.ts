import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TotalService } from '../../total.service';

//servicios
import { CarritoService } from '../../services/carrito.service';

//productos en stock

import {productosActual, productosActual1} from './productos'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  clave = new FormControl();
  productosActual: any[] = productosActual;
  productosActualAux: any[] = [...productosActual];
  productosActual1: any[] = productosActual1;

  productosCarritoActual: any;

  constructor(
    public carritoService: CarritoService
  ) {}

  ngOnInit() {
    this.carritoService.checkEmit.subscribe(resp => {
      console.log(resp);
    });
    this.clave.valueChanges.subscribe(value => {
      this.productosActual = [...this.productosActualAux];
      this.productosActual =
      this.productosActual.filter(producto => producto.tags.includes(value));
    });
  }

  agregarProducto(i: any){
    let index = this.carritoService.carrito.findIndex(producto => producto === this.productosActual[i]);
    console.log(index);
    if (index >= 0) {
      this.carritoService.carrito[index].cant+=1;
    }else{
      console.log("No tiene el producto");
      Object.assign(this.productosActual[i], {cant: 1})
      this.carritoService.carrito.push(this.productosActual[i]);
    }
    localStorage.setItem("carrito",JSON.stringify(this.carritoService.carrito));
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.carritoService.carrito.length;i++){
      if(this.carritoService.carrito[i].codigo == cod){
        this.carritoService.carrito.splice(i,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.carritoService.carrito));
  }

  actualizarProducto(cod: any){
    localStorage.setItem("carrito",JSON.stringify(this.carritoService.carrito));
  }

}
