import * as fs from "node:fs";
import * as rs from "readline-sync";
import { Mascotas } from "./mascotas";

export class Paciente {
    private pacientes: {
        id: string;
        nombre: string;
        especie: string;
        idCliente: string;
    }[] = [];

    pacienteFilePath: string = 'pacientes.json';


    cargarPacientes() {
        try {
            const data = fs.readFileSync(this.pacienteFilePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    guardarPacientesEnArchivo(paciente): void {
        fs.writeFileSync(this.pacienteFilePath, JSON.stringify(this.pacientes, null, 2));
    };

    private generarIdUnico(): string {
        let nuevoId: string;
        do {
            nuevoId = Math.random().toString(36).substring(2, 10); //generamos un id unico como vos <3
        } while (this.pacientes.some(p => p.id === nuevoId)); //existe???
        return nuevoId;
    };

    altaPaciente(nombre: string, especie: string, idCliente: string): void {
        console.log("Nuevo paciente.");
        // rs.keyInPause("\n");
        especie = rs.question("Que especie es?: ");
        // rs.keyInPause("\n");
        nombre = rs.question("Cual essu nombre?: ");
        // rs.keyInPause("\n");
        idCliente = rs.question("Ingrese el id del cliente: ");
        // rs.keyInPause("\n");
        if (especie !== "perro" && especie !== "gato") {
            especie = "exotica";
        }

        const nuevoPaciente = {
            id: this.generarIdUnico(),
            nombre,
            especie,
            idCliente,
        }
        this.pacientes.push(nuevoPaciente);
        this.guardarPacientesEnArchivo(nuevoPaciente);
    };

    modificarPacienteId(idPaciente: string,) {
        console.log("Modificar paciente.");
        idPaciente = rs.question("Por favor, ingrese el ID del paciente: ");
        const pacienteIndex = this.pacientes.findIndex(p => p.id === idPaciente);

        if (pacienteIndex !== -1) {
            console.log("Modificar paciente.");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].nombre = rs.question("Ingrese el nombre del paciente: ");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].especie = rs.question("Ingrese la especie: ");
            // rs.keyInPause("\n");
            this.pacientes[pacienteIndex].idCliente = rs.question("Ingrese el ID del cliente: ");
            // rs.keyInPause("\n");

            if (this.pacientes[pacienteIndex].especie !== "perro" && this.pacientes[pacienteIndex].especie !== "gato") {
                this.pacientes[pacienteIndex].especie = "exotica";
            }

            this.guardarPacientesEnArchivo(pacienteIndex);
            console.log('Paciente modificado correctamente.');
        } else {
            console.log("No se encontró al paciente.");
        }

    };

    bajaPacienteId(idPaciente: string) {
        console.log("Eliminar paciente.");
        idPaciente = rs.question("Por favor, ingrese el id del paciente: ");
        const pacienteIndex = this.pacientes.findIndex(p => p.id === idPaciente);
        if (pacienteIndex !== -1) {
            console.log("Borrar paciente.");

            this.pacientes = this.pacientes.filter(p => p.id !== idPaciente);
            this.guardarPacientesEnArchivo(pacienteIndex);
            console.log('Paciente eliminado correctamente.');
        } else {
            console.log("No se encontró al paciente.");
        }

    };


}
const mascota1 = new Paciente();
mascota1.altaPaciente("", "", "");
console.log(mascota1)
mascota1.modificarPacienteId("");
console.log(mascota1)
// mascota1.bajaPacienteId("");
console.log(mascota1);
const mascota2 = new Paciente();
mascota2.altaPaciente("", "", "");
console.log(mascota2);
const mascota3 = new Paciente();
mascota3.altaPaciente("", "", "");
console.log(mascota3);