"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funProveedor = void 0;
var fs = require("node:fs");
var funProveedor = /** @class */ (function () {
    function funProveedor() {
        this.proveedor;
    }
    ;
    funProveedor.leerProveedor = function () {
        try {
            var proveedorData = fs.readFileSync("./proveedor.ts", { encoding: "utf-8" });
            console.log("Procesando...");
            return JSON.parse(proveedorData);
        }
        catch (error) {
            console.log("Error inesperado, intente nuevamente.");
        }
    };
    ;
    funProveedor.agregarProveedor = function (proveedorData) {
        try {
            fs.writeFileSync("./proveedor.ts", JSON.stringify(proveedorData, null, 2), { encoding: "utf-8" });
            console.log("Proceso exitoso!");
        }
        catch (error) {
            console.log("Error inesperado, intentalo nuevamente.");
        }
    };
    return funProveedor;
}());
exports.funProveedor = funProveedor;
