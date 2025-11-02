export class Vehiculo {
  id: number;
  marca: string;
  linea: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;
  referencia: string;

  constructor(
    id: number,
    marca: string,
    linea: string,
    modelo: number,
    kilometraje: number,
    color: string,
    imagen: string,
    referencia: string
  ) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
    this.referencia = referencia;
  }
}
