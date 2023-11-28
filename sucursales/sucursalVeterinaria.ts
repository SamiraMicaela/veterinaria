//Todas las funciones van aca
import * as fs from "node:fs";
import * as rs from "readline-sync";
import { Cliente } from "../clientes/cliente";
import { Paciente } from "../pacientes/paciente";
import { Proveedor } from "../proveedores/proveedor";
import { Veterinaria } from '../veterinas/veterinaria';
import { funPaciente } from "../pacientes/funPaciente";
import { funClientes } from "../clientes/funCliente";
import { funProveedor } from "../proveedores/funProveedor";
import { funVeterinaria } from "../veterinas/funVeterinaria";


export class SucursalVeterinaria {
  id: number;
  nombre: string;
  direccion: string;

  clientes: Cliente[] = [];
  pacientes: Paciente[] = [];
  proveedores: Proveedor[] = [];
  veterinaria: Veterinaria[] = [];

  constructor(nombre: string, direccion: string) {
    this.id = this.generarIdUnico();
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
    this.pacientes = [];
    this.proveedores = [];
    this.veterinaria = [];

  }

  private generarIdUnico(): number {
    return Math.floor(Math.random() * 1000) + 1;
  };

  //SUCURSALES
  leerSucursales() {

  };
  //SUCURSALES

  // CLIENTE
  leerCliente() {
    try {
      const leerCliente = funClientes.leerCliente;

      if (leerCliente) {

        console.log("Clientes.");
        if (!this.clientes.length) {
          console.log("No se encontraron clientes.");
        } else {
          this.clientes.forEach((clientes) => {
            console.log(`id: ${clientes.idCliente}
              nombre: ${clientes.nombre}
              telefono: ${clientes.telefono}`)
          })
        }
      }
    } catch (error) {
      console.log("Error al intentar leer los archivos...");
    }

  }
  agregarCliente() {
    console.log("Nuevo cliente.");
    const leerClientes = funClientes.leerCliente;
    if (leerClientes) {

      const idCliente = this.generarIdUnico();
      const nombre = rs.question("Ingrese el nombre: ");
      const telefono = rs.question("Ingrese el numero telefomnico");

      const nuevoCliente = new Cliente(idCliente, nombre, telefono);
      this.clientes.push(nuevoCliente);
      console.log(this.clientes);
    } else {
      console.log("Error inesperado...");
    }

    funClientes.agregarCliente(this.clientes);
  };

  modificarCliente() {
    console.log("Modificar cliente por ID:");
    const idCliente = rs.questionInt("Ingrese el ID del cliente a modificar: ");
    const clienteAModificar = this.clientes.find((cliente) => cliente.idCliente === idCliente);
    if (clienteAModificar) {
      console.log(`Cliente encontrado: ${clienteAModificar.idCliente}, ${clienteAModificar.nombre}, ${clienteAModificar.telefono}`);
      const nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
      const nuevoTelefono = rs.question("Ingrese el nuevo telefono: ");
      clienteAModificar.nombre = nuevoNombre;
      clienteAModificar.telefono = nuevoTelefono;
      this.clientes.push(clienteAModificar);
      console.log("Cliente modificado correctamente: ", clienteAModificar);
    } else {
      console.log("No se encontro el cliente con el ID proporcionado.");
    }
    funClientes.agregarCliente(this.clientes);
    console.log(this.clientes);
  };

  eliminarCliente(): void {
    console.log("Borrar cliente por ID: ");
    const idBorrar = rs.questionInt("Por favor ingrese el id que desea eliminar: ");
    const recordIndex = this.clientes.findIndex(
      (clientes) => clientes.idCliente === idBorrar
    );

    if (recordIndex !== -1) {
      const eliminar = this.proveedores[recordIndex];
      const confirmacion = rs.keyInYN(`Quieres eliminar ${eliminar.id}? (Y/N)`);
      if (confirmacion) {
        this.proveedores.splice(recordIndex, 1);
        funProveedor.agregarProveedor(this.proveedores);
      } else {
        console.log("Eliminacion cancelada. \n");
      }
    } else {
      console.log("Proveedor no encontrado.");
    }
  };
  //CLIENTE

  //PROVEEDOR
  leerProvedoores() {
    const leerProvedoores = funProveedor.leerProveedor;
    if (leerProvedoores) {

      console.log("Proveedores.");
      if (!this.proveedores.length) {
        console.log("No se encontraron proveedores.");
      } else {
        this.proveedores.forEach((proveedores) =>
          console.log(`ID: ${proveedores.id}
        NOMBRE: ${proveedores.nombre}`));
      };
    }
    console.log(leerProvedoores);
  };

  agregarProveedor(): void {
    console.log("Nuevo proveedor.");
    const leerProvedoores = funProveedor.leerProveedor;
    if (leerProvedoores) {

      const id = this.generarIdUnico();
      const nombre = rs.question("Ingrese el nombre: ");
      const telefono = rs.question("Ingrese el telefono del proveedor: ");
      const proveedor = new Proveedor(nombre, telefono);
      this.proveedores.push(proveedor);
    } else {
      console.log("Error inesperado...");
    }
    funProveedor.agregarProveedor(this.proveedores);
  };

  modificarProveedor() {
    console.log("Modificar proveedor.");
    const id = rs.questionInt("Ingrese el id del proveedor a modificar: ");
    const proveedorAModificar = this.proveedores.find((proveedor) => proveedor.id === id);
    if (proveedorAModificar) {
      const nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
      const nuevoTelefono = rs.question("Inmgrese el nuevo telefono: ");
      proveedorAModificar.nombre = nuevoNombre;
      proveedorAModificar.telefono = nuevoTelefono;
      this.proveedores.push(proveedorAModificar);
      console.log("Proveedor correctamente modificado!");
    } else {
      console.log("No se encontro el ID...");
    }
    funProveedor.agregarProveedor(this.proveedores);
  };

  eliminarProveedor(): void {
    console.log("Eliminar proveedor.");
    const idBorrar = rs.questionInt("Ingrese el ID de proveedor que desea eliminar: ");
    const recordIndex = this.proveedores.findIndex((proveedores) => proveedores.id === idBorrar);
    if (recordIndex !== -1) {
      const eliminar = this.proveedores[recordIndex];
      const confirmacion = rs.keyInYN(`Quieres eliminar ${eliminar} (Y/N)`);
      if (confirmacion) {
        this.proveedores.splice(recordIndex, 1);
        funProveedor.agregarProveedor(this.proveedores);
      } else {
        console.log("Eliminacion cancelada. \n");
      }
    } else {
      console.log("Proveedor no encontrado.");
    }
  };
  //PROVEEDOR

  //VETERINARIA

  leerVeterinaria() {
    const leerVeterinaria = funVeterinaria.leerVeterinaria;
    if (leerVeterinaria) {

      console.log("VETERINARIAS.");
      if (!this.veterinaria.length) {
        console.log("No se encontraron  veterinarias.");
      } else {
        this.veterinaria.forEach((veterinaria) => {
          console.log(`ID: ${veterinaria.id}
          NOMBRE: ${veterinaria.nombre}
          DIRECCION: ${veterinaria.direccion}`);
        });
      };
    } else {
      console.log("Algo salio mal, volver ahacer el codigo completo yam no doy mas!!!!!");
    }
    console.log("Salio todo bien???????", leerVeterinaria);

  };

  agregarVeterinaria(): void {
    console.log("Nueva veterinaria.");
    const leerVeterinaria = funVeterinaria.leerVeterinaria;
    if (leerVeterinaria) {

      const id = this.generarIdUnico();
      const nombre = rs.question("Ingrese el nombre de VETERINARIA: ");
      const direccion = rs.question("Ingrese la direccion");
      const veterinaria = new Veterinaria(nombre, direccion);
      this.veterinaria.push(veterinaria);
      console.log(veterinaria);
    } else {
      console.log("Intentalo de nuevo.");
    }
    funVeterinaria.agregarVeterinaria(this.veterinaria);
  };

  modificarVeterinaria() {
    console.log("Modificar veterinaria.");
    const id = rs.questionInt("Ingrese el ID de la veterinaria a modificar: ");
    const veterinariaAModificar = this.veterinaria.find((veterinaria) => veterinaria.id === id);
    if (veterinariaAModificar) {
      const nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
      const nuevaDireccion = rs.question("Ingrese la nueva direccion: ");
      veterinariaAModificar.nombre = nuevoNombre;
      veterinariaAModificar.direccion = nuevaDireccion;
      this.veterinaria.push(veterinariaAModificar);
      console.log("Veterinaria modificada correctamente!");
    } else {
      console.log("ID no encontrado");
    }

    funVeterinaria.agregarVeterinaria(this.veterinaria);

  };

  eliminarVeterinaria(): void {
    console.log("Eliminar veterinaria");
    const idBorrar = rs.questionInt("Ingre el id de veterinaria que desea eliminar: ");
    const recordIndex = this.veterinaria.findIndex((veterinaria) => veterinaria.id === idBorrar);
    if (recordIndex !== -1) {
      const eliminar = this.veterinaria[recordIndex];
      const confirmacion = rs.keyInYN(`Quieres eliminar ${eliminar.id}? (Y/N)`);
      if (confirmacion) {
        this.veterinaria.splice(recordIndex, 1);
        funVeterinaria.agregarVeterinaria(this.veterinaria);
      } else {
        console.log("Eliminacion cancelada. \n")
      }
    }
  };

  //VETERINARIA

  //PACIENTES

  altaPaciente(): void {
    console.log("Nuevo paciente.");

    const idCliente = rs.questionInt("Ingrese el ID del cliente: ");
    const clienteExistente = this.clientes.some(p => p.idCliente === idCliente);

    if (clienteExistente) {
      const id = this.generarIdUnico();
      let especie = rs.question("Que especie es?: ");
      const nombre = rs.question("Cual essu nombre?: ");

      if (especie !== "perro" && especie !== "gato") {
        especie = "exotica";
      }
      const nuevoPaciente = new Paciente(id,nombre,especie,idCliente);
      this.pacientes.push(nuevoPaciente);

      console.log("Paciente creado correctamente.", this.pacientes);
    } else {
      console.log("Error inesperado...");
    }
    funPaciente.agregarPaciente(this.pacientes);
  };

  modificarPacientes() {
    console.log("Modificar paciente.");
    const id = rs.questionInt("Ingrese el ID del paciente a modificar: ");
    const pacienteAModificar = this.pacientes.find((paciente)=>paciente.id === id);
    if(pacienteAModificar){
      const nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
      let nuevaEspecie = rs.question("Ingrese la especie: ");
      pacienteAModificar.nombre = nuevoNombre;
      pacienteAModificar.especie = nuevaEspecie;
      this.pacientes.push(pacienteAModificar);
      console.log("Paciente modificado correctamente!");
    }else{
      console.log("No se encontro el ID del paciente...");
    }
    funPaciente.agregarPaciente(this.pacientes);
  };

  bajaPaciente(){
    console.log("Eliminar paciente por ID");
    const idBorrar = rs.questionInt("Ingrese el ID del paciente a eliminar: ");
    const recordIndex = this.pacientes.findIndex((paciente)=> paciente.id === idBorrar);
    if(recordIndex !==-1){
      const eliminar = this.pacientes[recordIndex];
      const confirmacion = rs.keyInYN(`Quieres eliminar ${eliminar}? (Y/N)`);
      if(confirmacion){
        this.pacientes.splice(recordIndex, 1);
        funPaciente.agregarPaciente(this.pacientes);
      }else{
        console.log("Eliminacion cancelada. \n");
      }
    }else{
      console.log("Paciente no encontrado...");
    }

  };
}

