import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  formulario = new FormGroup({
    tipo: new FormControl('', Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    numero: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    cvc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    exp: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]),
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
      this.router.navigate(['']);
    } else {
      //alerta
    }
  }
  get tipo(){ return this.formulario.get('tipo')}
  get nombre(){ return this.formulario.get('nombre')}
  get numero(){ return this.formulario.get('numero')}
  get cvc(){ return this.formulario.get('cvc')}
  get exp(){ return this.formulario.get('exp')}

}
