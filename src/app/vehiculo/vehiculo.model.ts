export class Vehiculo {
  id: number;
  marca: string;
  linea: string;
  modelo: number;
  precio: number;
  imagen: string;

  constructor(
    id: number,
    marca: string,
    linea: string,
    modelo: number,
    precio: number,
    imagen: string
  ) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
  }
}
