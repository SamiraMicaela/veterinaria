"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var fs = require("node:fs");
var Paciente = /** @class */ (function () {
    function Paciente(id, nombre, especie, idCliente) {
        this.pacienteFilePath = "./pacientes.json";
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.idCliente = idCliente;
    }
    ;
    Paciente.prototype.cargarPacientes = function () {
        try {
            var data = fs.readFileSync(this.pacienteFilePath, 'utf8');
            return JSON.parse(data);
        }
        catch (error) {
            return [];
        }
    };
    ;
    Paciente.prototype.generarIdUnico = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    ;
    return Paciente;
}());
exports.Paciente = Paciente;
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
