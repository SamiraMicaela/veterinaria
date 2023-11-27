"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.id = this.generarIdUnico();
        this.nombre = nombre;
        this.telefono = telefono;
    }
    ;
    Proveedor.prototype.generarIdUnico = function () {
        // Lógica para generar un ID único
        return Math.floor(Math.random() * 1000) + 1;
    };
    ;
    return Proveedor;
}());
exports.Proveedor = Proveedor;
