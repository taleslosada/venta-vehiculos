import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo.model';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  totalPorMarca: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.calcularTotales();
    });
  }

  calcularTotales() {
    this.totalPorMarca = {};
    this.vehiculos.forEach(v => {
      this.totalPorMarca[v.marca] = (this.totalPorMarca[v.marca] || 0) + 1;
    });
  }
}
