//import * as fs from "node:fs";

class Paciente {
    private pacientes: {
        id: string;
        nombre: string;
        especie: string;
        idCliente: string;
    }[] = [];

    private jsonFilePath: string = 'pacientes.json';

    private generarIdUnico(): string {
        let nuevoId: string;
        do {
            nuevoId = Math.random().toString(36).substring(2, 10); //generamos un id unico como vos <3
        } while (this.pacientes.some(p => p.id === nuevoId)); //existe???
        return nuevoId;
    }

    altaPaciente(nombre: string, especie: string, idCliente: string): void {
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
        // this.guardarPacientesEnArchivo();
    };

    // private guardarPacientesEnArchivo(): void {
    //     fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.pacientes, null, 2));
    // }

    modificarPacienteId(idPaciente: string, nombre: string, especie: string, idCliente: string) {
        const paciente = this.pacientes.find(p => p.id === idPaciente);
        if (paciente) {
            paciente.nombre = nombre;
            paciente.especie = especie;
            paciente.idCliente = idCliente;
        }
    };

    bajaPacienteId(idPaciente: string) {
        this.pacientes = this.pacientes.filter(p => p.id !== idPaciente);
    };


}