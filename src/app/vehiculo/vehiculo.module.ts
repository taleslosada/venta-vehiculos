import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  imports: [
    CommonModule,
    ListarVehiculoComponent 
  ],
  exports: [
    ListarVehiculoComponent 
  ]
})
export class VehiculoModule { }
