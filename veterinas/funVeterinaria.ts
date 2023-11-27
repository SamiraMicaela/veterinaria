import { Veterinaria } from "./veterinaria";
import * as fs from "node:fs";


export class funVeterinaria {
    veterinaria: Veterinaria[];
    constructor() {
        this.veterinaria = [];
    };

    static leerVeterinaria() {
        try {
            const veterinariaData = fs.readFileSync("./veterinaria.json", {encoding:"utf-8"});
            console.log("Veterinarias.");
            return JSON.parse(veterinariaData) as Veterinaria[];
        } catch (error) {
            console.log("Error inesperado.")
        }
    };

    static agregarVeterinaria(veterinariaData: Veterinaria[]){
        try {
            fs.writeFileSync("./veterinaria.json", JSON.stringify(veterinariaData, null, 2), {encoding:"utf-8"});
            console.log("¡Completo!");
        } catch (error) {
            console.log("Error inesperado.");
        }
    };
}