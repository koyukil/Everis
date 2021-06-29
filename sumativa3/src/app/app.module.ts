import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

//servicios
import { CarritoService } from './services/carrito.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PagoComponent } from './pages/pago/pago.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent,
    EnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
