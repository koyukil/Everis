import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public checkEmit = new Subject();
  public carrito: any[] = [];

  get precioFinal() {
    let total = 0;
    this.carrito.forEach(({precio, cantidad}, index, array) => {
      total += (precio);
    });
    return total;
  }

  constructor() {}

  getStorage() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  }

}
