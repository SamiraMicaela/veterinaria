export class Veterinaria {
  id: number;
  nombre: string;
  direccion: string;


  constructor(nombre: string, direccion: string) {
    this.id = this.generarIdUnico();
    this.nombre = nombre;
    this.direccion = direccion;
}

  private generarIdUnico(): number {
    // Lógica para generar un ID único
    return Math.floor(Math.random() * 1000) + 1;
  }

}

