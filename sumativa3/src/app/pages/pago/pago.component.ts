import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  formulario = new FormGroup({
    pais: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    region: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    ciudad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    comuna: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
    calle: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  });

  get productos() {
    return this.carritoService.carrito
  }
  get precioFinal() {
    return this.carritoService.precioFinal
  }
  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carritoService.getStorage();
  }

  enviarPago() {
    if (this.formulario.valid) {
      this.router.navigate(['/envio']);
    } else {
      //alerta
    }
  }

  get pais(){ return this.formulario.get('pais')}
  get region(){ return this.formulario.get('region')}
  get ciudad(){ return this.formulario.get('ciudad')}
  get comuna(){ return this.formulario.get('comuna')}
  get codigo(){ return this.formulario.get('codigo')}
  get calle(){ return this.formulario.get('calle')}

}
