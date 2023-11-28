import * as fs from "node:fs";
import * as rs from "readline-sync";
import { Mascotas } from "./mascotas";
import { Cliente } from "../clientes/cliente";

export class Paciente {
    private pacientes: {
        id: number;
        nombre: string;
        especie: string;
        idCliente: number;
    }[];

    pacienteFilePath: string = "./pacientes.json";

    constructor() {
        this.pacientes = this.cargarPacientes() || [];
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

    guardarPacientesEnArchivo(): void {
        fs.writeFileSync(this.pacienteFilePath, JSON.stringify(this.pacientes, null, 2));
    };

    private generarIdUnico(): number {
        let nuevoId: number;
        do {
            nuevoId = Math.floor(Math.random() * 1000) + 1;; //generamos un id unico como vos <3
        } while (this.pacientes.some(p => p.id === nuevoId)); //existe???
        return nuevoId;
    };

    // altaPaciente(): void {
    //     console.log("Nuevo paciente.");

    //     const idCliente = rs.questionInt("Ingrese el ID del cliente: ");
    //     const clienteExistente = this.clientes.some(p => p.idCliente === idCliente);

    //     if (clienteExistente) {
    //         let especie = rs.question("Que especie es?: ");
    //         let nombre = rs.question("Cual essu nombre?: ");

    //         if (especie !== "perro" && especie !== "gato") {
    //             especie = "exotica";
    //         }
    //         const nuevoPaciente = {
    //             id: this.generarIdUnico(),
    //             nombre,
    //             especie,
    //             idCliente,

    //         };
    //         this.pacientes.push(nuevoPaciente);
    //         this.guardarPacientesEnArchivo();
    //         console.log("Paciente creado correctamente.");
    //     } else {
    //         console.log("Error: ID del cliente no encontrado.");
    //     };
    // };

    modificarPacienteId(idPaciente: number,) {
        console.log("Modificar paciente.");
        idPaciente = rs.questionInt("Por favor, ingrese el ID del paciente: ");
        const pacienteIndex = this.pacientes.findIndex(p => p.id === idPaciente);

        if (pacienteIndex !== -1) {
            console.log("Modificar paciente.");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].nombre = rs.question("Ingrese el nombre del paciente: ");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].especie = rs.question("Ingrese la especie: ");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].idCliente = rs.questionInt("Ingrese el ID del cliente: ");
            // rs.keyInPause("\n");

            if (this.pacientes[pacienteIndex].especie !== "perro" && this.pacientes[pacienteIndex].especie !== "gato") {
                this.pacientes[pacienteIndex].especie = "exotica";
            }

            this.guardarPacientesEnArchivo();
            console.log('Paciente modificado correctamente.');
        } else {
            console.log("No se encontró al paciente.");
        }

    };

    bajaPacienteId(idPaciente: number) {
        console.log("Eliminar paciente.");
        idPaciente = rs.questionInt("Por favor, ingrese el id del paciente: ");
        const pacienteIndex = this.pacientes.findIndex(p => p.id === idPaciente);
            if (pacienteIndex !== -1) {
                console.log("Borrar paciente.");

                this.pacientes = this.pacientes.filter(p => p.id !== idPaciente);
                this.guardarPacientesEnArchivo();
                console.log('Paciente eliminado correctamente.');
            } else {
                console.log("No se encontró al paciente.");
            }
        
        this.pacientes = this.pacientes.filter(p => p.id !== idPaciente);
        this.guardarPacientesEnArchivo();  // Corregido aquí
        console.log('Paciente eliminado correctamente.');
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





// import * as fs from "node:fs";
// import * as rs from "readline-sync";
// import { Mascotas } from "./mascotas";
// import { funPaciente } from "./funPaciente";
// import { Cliente } from "./Cliente";

// export class Paciente {

//     idPaciente: number;
//     nombre: string;
//     especie: string;
//     idCliente: string;
//     constructor(nombre: string, especie: string, idCliente: string) {
//         this.idPaciente = this.generarIdUnico();
//         this.especie = especie;
//         this.nombre = nombre;
//         this.idCliente = idCliente;
//     };

//     private generarIdUnico(): number {

//         return Math.floor(Math.random() * 1000) + 1;
//     };

// }
// const mascota1 = new Paciente();
// mascota1.altaPaciente("", "", "");
// console.log(mascota1)
// mascota1.modificarPacienteId("");
// console.log(mascota1)
// // mascota1.bajaPacienteId("");
// console.log(mascota1);
// const mascota2 = new Paciente();
// mascota2.altaPaciente("", "", "");
// console.log(mascota2);
// const mascota3 = new Paciente();
// mascota3.altaPaciente("", "", "");
// console.log(mascota3);