import { Paciente } from "./paciente";
import * as fs from "node:fs";

export class funPaciente {
    paciente: Paciente[];
    constructor() {
        this.paciente = [];
    };

    static leerPaciente(){
        try {
            const pacienteData = fs.readFileSync("./pacientes.json", { encoding: "utf-8" });
            console.log("Procesando Pacientes...");
            return JSON.parse(pacienteData) as Paciente[];
        } catch (error) {
            console.log("Error inesperado, intentelo nuevamente.");
        }
    };

    static agregarPaciente(pacienteData: Paciente[]) {
        try {
            fs.writeFileSync("./pacientes.json", JSON.stringify(pacienteData, null, 2), { encoding: "utf-8" });
            console.log("Procesamiento exitoso.");
        } catch (error) {
            console.log( "Error inesperado, intentelo nuevamente.");
        }
    };
}