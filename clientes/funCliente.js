"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funClientes = void 0;
var fs = require("node:fs");
var funClientes = /** @class */ (function () {
    function funClientes() {
        this.cliente = [];
    }
    ;
    funClientes.leerCliente = function () {
        try {
            var clienteData = fs.readFileSync("./cliente.json", { encoding: "utf-8" });
            console.log("Procesando clientes...");
            return JSON.parse(clienteData);
        }
        catch (error) {
            console.log("Error inesperado, intente de nuevo por favor.");
        }
    };
    ;
    funClientes.agregarCliente = function (clienteData) {
        try {
            fs.writeFileSync("./cliente.json", JSON.stringify(clienteData, null, 2), { encoding: "utf-8" });
            console.log("Cliente agregado con exito.");
        }
        catch (error) {
            console.log("Error inesperado, intentelo nuevamente.");
        }
    };
    ;
    return funClientes;
}());
exports.funClientes = funClientes;
//   public Getid() {
//     return this.idCliente;
//   };
//   private generarIdUnico(): number {
//     return Math.floor(Math.random() * 1000) + 1;
//   };
//   incrementarVisitas(): void {
//     this.numeroVisitas++;
//     if (this.numeroVisitas >= 5) {
//       this.esVIP = true;
//     }
//   };
//   verificarRuta(){
//     if (fs.existsSync(this.clienteFilePath)) {
//       // La ruta es válida, ahora puedes leer el archivo y hacer otras operaciones
//       const jsonData = fs.readFileSync(this.clienteFilePath, "utf-8");
//       const clientes = JSON.parse(jsonData);
//       console.log(clientes);
//     } else {
//       console.error(`La ruta "${this.clienteFilePath}" no es válida.`);
//     }
//   }
