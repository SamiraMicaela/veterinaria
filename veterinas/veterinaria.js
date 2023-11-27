"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.id = this.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Veterinaria.prototype.generarIdUnico = function () {
        // Lógica para generar un ID único
        return Math.floor(Math.random() * 1000) + 1;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
