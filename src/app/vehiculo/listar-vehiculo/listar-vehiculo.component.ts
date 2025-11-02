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
  conteoPorMarca: { [key: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos = data;
      this.calcularConteoPorMarca();
    });
  }

  calcularConteoPorMarca(): void {
    this.vehiculos.forEach((v) => {
      this.conteoPorMarca[v.marca] = (this.conteoPorMarca[v.marca] || 0) + 1;
    });
  }
}
