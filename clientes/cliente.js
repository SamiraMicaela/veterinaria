"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var funCliente_1 = require("./funCliente");
var Cliente = /** @class */ (function () {
    function Cliente(idCliente, nombre, telefono) {
        this.esVIP = false;
        this.numeroVisitas = 0;
        this.idCliente = this.generarIdUnico();
        this.nombre = nombre;
        this.telefono = telefono;
    }
    ;
    Cliente.prototype.generarIdUnico = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    ;
    Cliente.prototype.incrementarVisitas = function () {
        this.numeroVisitas++;
        if (this.numeroVisitas >= 5) {
            this.esVIP = true;
        }
    };
    ;
    return Cliente;
}());
exports.Cliente = Cliente;
var nuevoCliente = new Cliente(0, "", "");
// nuevoCliente.crearCliente();
var todosLosClientes = funCliente_1.funClientes.leerCliente();
console.log("Todos los clientes:", todosLosClientes);
//   public Getid() {
//     return this.idCliente;
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
