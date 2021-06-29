import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvioComponent } from './pages/envio/envio.component';
import { LoginComponent } from './pages/login/login.component';
import { PagoComponent } from './pages/pago/pago.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
      path:'productos',
      component: ProductosComponent
  },
  {
      path:'pago',
      component: PagoComponent
  },
  {
    path:'envio',
    component: EnvioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
