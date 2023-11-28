import * as fs from "node:fs";
import * as rs from "readline-sync";
import { Mascotas } from "./mascotas";
import { Cliente } from "../clientes/cliente";

export class Paciente {
    
        id: number;
        nombre: string;
        especie: string;
        idCliente: number;
    

    pacienteFilePath: string = "./pacientes.json";

    constructor(id:number, nombre:string,especie:string,idCliente:number) {
        this.id = id;
        this.nombre=nombre;
        this.especie=especie;
        this.idCliente=idCliente;
    };


    private cargarPacientes(): {
        id: number;
        nombre: string;
        especie: string;
        idCliente: number;
    }[] {
        try {
            const data = fs.readFileSync(this.pacienteFilePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    };



    private generarIdUnico(): number {
        return Math.floor(Math.random() * 1000) + 1;
      };

    


}
// const cliente01 = new Cliente(0,"","");
// cliente01.idCliente; 
// const mascota1 = new Paciente();
// mascota1.altaPaciente();
// console.log(mascota1)
// mascota1.modificarPacienteId(0);
// console.log(mascota1)
// mascota1.bajaPacienteId(0);
// console.log(mascota1);
// const mascota2 = new Paciente();
// mascota2.altaPaciente();
// console.log(mascota2);
// const mascota3 = new Paciente();
// mascota3.altaPaciente();
// console.log(mascota3);

