"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funVeterinaria = void 0;
var fs = require("node:fs");
var funVeterinaria = /** @class */ (function () {
    function funVeterinaria() {
        this.veterinaria = [];
    }
    ;
    funVeterinaria.leerVeterinaria = function () {
        try {
            var veterinariaData = fs.readFileSync("./veterinaria.json", { encoding: "utf-8" });
            console.log("Veterinarias.");
            return JSON.parse(veterinariaData);
        }
        catch (error) {
            console.log("Error inesperado.");
        }
    };
    ;
    funVeterinaria.agregarVeterinaria = function (veterinariaData) {
        try {
            fs.writeFileSync("./veterinaria.json", JSON.stringify(veterinariaData, null, 2), { encoding: "utf-8" });
            console.log("¡Completo!");
        }
        catch (error) {
            console.log("Error inesperado.");
        }
    };
    ;
    return funVeterinaria;
}());
exports.funVeterinaria = funVeterinaria;
