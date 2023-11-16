import { Cliente } from './Cliente';
import { Paciente } from './Paciente';
import { Proveedor } from './Proveedor';
import { Veterinaria } from './Veterinaria';

export class SucursalVeterinaria {
  id: number;
  nombre: string;
  direccion: string;
  clientes: Cliente[] = [];
  pacientes: Paciente[] = [];
  proveedores: Proveedor[] = [];
  veterinaria: Veterinaria [] = [];

  constructor(nombre: string, direccion: string) {
    this.id = this.generarIdUnico();
    this.nombre = nombre;
    this.direccion = direccion;
  }

  private generarIdUnico(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  agregarVeterinaria(nombre: string, direccion: string): void {
    const veterinaria = new Veterinaria(nombre, direccion);
    this.veterinaria.push(veterinaria);
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

  eliminarVeterinaria(id: number): void {
    this.veterinaria = this.veterinaria.filter((veterinaria) => veterinaria.id !== id);
  }

  eliminarCliente(id: number): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
  }

  eliminarPaciente(id: number): void {
    this.pacientes = this.pacientes.filter((paciente) => paciente.id !== id);
  }

  eliminarProveedor(id: number): void {
    this.proveedores = this.proveedores.filter((proveedor) => proveedor.id !== id);
  }
}