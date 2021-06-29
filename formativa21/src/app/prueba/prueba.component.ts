import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  i=1;


  aumentar(){
    this.i++;
  }

  disminuir(){
    this.i--;
  }

}
