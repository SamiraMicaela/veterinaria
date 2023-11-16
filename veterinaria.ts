class Veterinaria {
    id: number;
    nombre: string;
    direccion: string;
    clientes: Cliente[] = [];
    pacientes: Paciente[] = [];
    proveedores: Proveedor[] = [];
  
    constructor(nombre: string, direccion: string) {
      this.id = this.generarIdUnico();
      this.nombre = nombre;
      this.direccion = direccion;
    }
  
    private generarIdUnico(): number {
      // Lógica para generar un ID único
      return Math.floor(Math.random() * 1000) + 1;
    }
  
    agregarCliente(nombre: string, telefono: string): void {
      const cliente = new Cliente(nombre, telefono);
      this.clientes.push(cliente);
    }
  
    agregarPaciente(nombre: string, especie: string, idDueño: number): void {
      const paciente = new Paciente(nombre, especie, idDueño);
      this.pacientes.push(paciente);
    }
  
    agregarProveedor(nombre: string, telefono: string): void {
      const proveedor = new Proveedor(nombre, telefono);
      this.proveedores.push(proveedor);
    }
  }
  
  class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    esVIP: boolean = false;
    numeroVisitas: number = 0;
  
    constructor(nombre: string, telefono: string) {
      this.id = this.generarIdUnico();
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    private generarIdUnico(): number {
      
      return Math.floor(Math.random() * 1000) + 1;
    }
  
    incrementarVisitas(): void {
      this.numeroVisitas++;
      if (this.numeroVisitas >= 5) {
        this.esVIP = true;
      }
    }
  }
  
  class Paciente {
    id: number;
    nombre: string;
    especie: string;
    idDueño: number;
  
    constructor(nombre: string, especie: string, idDueño: number) {
      this.id = this.generarIdUnico();
      this.nombre = nombre;
      this.especie = especie;
      this.idDueño = idDueño;
    }
  
    private generarIdUnico(): number {
      
      return Math.floor(Math.random() * 1000) + 1;
    }
  }
  
  class Proveedor {
    id: number;
    nombre: string;
    telefono: string;
  
    constructor(nombre: string, telefono: string) {
      this.id = this.generarIdUnico();
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    private generarIdUnico(): number {
      // Lógica para generar un ID único
      return Math.floor(Math.random() * 1000) + 1;
    }
  }
  
  // Ejemplo:
  
  const veterinaria = new Veterinaria('Mi Veterinaria', 'Calle Principal');
  
  veterinaria.agregarCliente('Juan', '123-456-7890');
  veterinaria.agregarPaciente('Firulais', 'Perro', 1);
  veterinaria.agregarProveedor('Proveedor1', '987-654-3210');