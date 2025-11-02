import { Component } from '@angular/core';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListarVehiculoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venta-vehiculos';
}
