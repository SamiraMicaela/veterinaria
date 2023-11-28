import * as fs from "node:fs";
import * as rs from "readline-sync";
import { funClientes } from "./funCliente";
import { Paciente } from "../pacientes/paciente";


export class Cliente {
  idCliente: number;
  nombre: string;
  telefono: string;
  esVIP: boolean = false;
  numeroVisitas: number = 0;

  constructor(idCliente: number, nombre: string, telefono: string) {
    this.idCliente = this.generarIdUnico();
    this.nombre = nombre;
    this.telefono = telefono;
  };

  private generarIdUnico(): number {
    return Math.floor(Math.random() * 1000) + 1;
  };

  incrementarVisitas(): void {
    this.numeroVisitas++;
    if (this.numeroVisitas >= 5) {
      this.esVIP = true;
    }
      
  };
}

const nuevoCliente = new Cliente(0, "", "");
// nuevoCliente.crearCliente();


const todosLosClientes = funClientes.leerCliente();
console.log("Todos los clientes:", todosLosClientes);



//   public Getid() {
//     return this.idCliente;
//   };
//   verificarRuta(){
//     if (fs.existsSync(this.clienteFilePath)) {
//       // La ruta es válida, ahora puedes leer el archivo y hacer otras operaciones
//       const jsonData = fs.readFileSync(this.clienteFilePath, "utf-8");
//       const clientes = JSON.parse(jsonData);
//       console.log(clientes);
//     } else {
//       console.error(`La ruta "${this.clienteFilePath}" no es válida.`);
//     }
//   }