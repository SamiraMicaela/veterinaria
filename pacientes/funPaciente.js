"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funPaciente = void 0;
var fs = require("node:fs");
var funPaciente = /** @class */ (function () {
    function funPaciente() {
        this.paciente = [];
    }
    ;
    funPaciente.leerPaciente = function () {
        try {
            var pacienteData = fs.readFileSync("./pacientes.json", { encoding: "utf-8" });
            console.log("Procesando Pacientes...");
            return JSON.parse(pacienteData);
        }
        catch (error) {
            console.log("Error inesperado, intentelo nuevamente.");
        }
    };
    ;
    funPaciente.agregarPaciente = function (pacienteData) {
        try {
            fs.writeFileSync("./pacientes.json", JSON.stringify(pacienteData, null, 2), { encoding: "utf-8" });
            console.log("Procesamiento exitoso.");
        }
        catch (error) {
            console.log("Error inesperado, intentelo nuevamente.");
        }
    };
    ;
    return funPaciente;
}());
exports.funPaciente = funPaciente;
