import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';

const routes: Routes = [
  { path: '', component: ListarVehiculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
