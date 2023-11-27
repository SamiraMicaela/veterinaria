"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalVeterinaria = void 0;
//Todas las funciones van aca
var fs = require("node:fs");
var rs = require("readline-sync");
var cliente_1 = require("../clientes/cliente");
var proveedor_1 = require("../proveedores/proveedor");
var veterinaria_1 = require("../veterinas/veterinaria");
var funCliente_1 = require("../clientes/funCliente");
var funProveedor_1 = require("../proveedores/funProveedor");
var funVeterinaria_1 = require("../veterinas/funVeterinaria");
var SucursalVeterinaria = /** @class */ (function () {
    function SucursalVeterinaria(nombre, direccion) {
        this.clientes = [];
        this.pacientes = [];
        this.proveedores = [];
        this.veterinaria = [];
        this.id = this.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
        this.proveedores = [];
        this.veterinaria = [];
    }
    SucursalVeterinaria.prototype.generarIdUnico = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    ;
    //SUCURSALES
    SucursalVeterinaria.prototype.leerSucursales = function () {
    };
    ;
    //SUCURSALES
    // CLIENTE
    SucursalVeterinaria.prototype.leerCliente = function () {
        try {
            var leerCliente = fs.readFileSync("./clientes/cliente.json", { encoding: "utf-8" });
            if (leerCliente) {
                this.clientes = JSON.parse(leerCliente);
                console.log("Clientes.");
                if (!this.clientes.length) {
                    console.log("No se encontraron clientes.");
                }
                else {
                    this.clientes.forEach(function (clientes) {
                        console.log("id: ".concat(clientes.idCliente, "\n              nombre: ").concat(clientes.nombre, "\n              telefono: ").concat(clientes.telefono));
                    });
                }
            }
        }
        catch (error) {
            console.log("Error al intentar leer los archivos...");
        }
    };
    SucursalVeterinaria.prototype.agregarCliente = function () {
        console.log("Nuevo cliente.");
        var leerClientes = fs.readFileSync("./clientes/cliente.json", { encoding: "utf-8" });
        if (leerClientes) {
            this.clientes = JSON.parse(leerClientes);
            var idCliente = this.generarIdUnico();
            var nombre = rs.question("Ingrese el nombre: ");
            var telefono = rs.question("Ingrese el numero telefomnico");
            var nuevoCliente = new cliente_1.Cliente(idCliente, nombre, telefono);
            this.clientes.push(nuevoCliente);
            console.log(this.clientes);
        }
        else {
            console.log("Error inesperado...");
        }
        funCliente_1.funClientes.agregarCliente(this.clientes);
    };
    ;
    SucursalVeterinaria.prototype.modificarCliente = function () {
        console.log("Modificar cliente por ID:");
        var idCliente = rs.questionInt("Ingrese el ID del cliente a modificar: ");
        var clienteAModificar = this.clientes.find(function (cliente) { return cliente.idCliente === idCliente; });
        if (clienteAModificar) {
            console.log("Cliente encontrado: ".concat(clienteAModificar.idCliente, ", ").concat(clienteAModificar.nombre, ", ").concat(clienteAModificar.telefono));
            var nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
            var nuevoTelefono = rs.question("Ingrese el nuevo telefono: ");
            clienteAModificar.nombre = nuevoNombre;
            clienteAModificar.telefono = nuevoTelefono;
            this.clientes.push(clienteAModificar);
            console.log("Cliente modificado correctamente: ", clienteAModificar);
        }
        else {
            console.log("No se encontro el cliente con el ID proporcionado.");
        }
        funCliente_1.funClientes.agregarCliente(this.clientes);
        console.log(this.clientes);
    };
    ;
    SucursalVeterinaria.prototype.eliminarCliente = function () {
        console.log("Borrar cliente por ID: ");
        var idBorrar = rs.questionInt("Por favor ingrese el id que desea eliminar: ");
        var recordIndex = this.clientes.findIndex(function (clientes) { return clientes.idCliente === idBorrar; });
        if (recordIndex !== -1) {
            var eliminar = this.proveedores[recordIndex];
            var confirmacion = rs.keyInYN("Quieres eliminar ".concat(eliminar.id, "? (Y/N)"));
            if (confirmacion) {
                this.proveedores.splice(recordIndex, 1);
                funProveedor_1.funProveedor.agregarProveedor(this.proveedores);
            }
            else {
                console.log("Eliminacion cancelada. \n");
            }
        }
        else {
            console.log("Proveedor no encontrado.");
        }
    };
    ;
    //CLIENTE
    //PROVEEDOR
    SucursalVeterinaria.prototype.leerProvedoores = function () {
        var leerProvedoores = fs.readFileSync("./proveedores/proveedor.json", { encoding: "utf-8" });
        if (leerProvedoores) {
            this.proveedores = JSON.parse(leerProvedoores);
            console.log("Proveedores.");
            if (!this.proveedores.length) {
                console.log("No se encontraron proveedores.");
            }
            else {
                this.proveedores.forEach(function (proveedores) {
                    return console.log("ID: ".concat(proveedores.id, "\n        NOMBRE: ").concat(proveedores.nombre));
                });
            }
            ;
        }
        console.log(leerProvedoores);
    };
    ;
    SucursalVeterinaria.prototype.agregarProveedor = function () {
        console.log("Nuevo proveedor.");
        var leerProvedoores = fs.readFileSync("./proveedores/proveedor.json", { encoding: "utf-8" });
        if (leerProvedoores) {
            this.proveedores = JSON.parse(leerProvedoores);
            var id = this.generarIdUnico();
            var nombre = rs.question("Ingrese el nombre: ");
            var telefono = rs.question("Ingrese el telefono del proveedor: ");
            var proveedor = new proveedor_1.Proveedor(nombre, telefono);
            this.proveedores.push(proveedor);
        }
        else {
            console.log("Error inesperado...");
        }
        funProveedor_1.funProveedor.agregarProveedor(this.proveedores);
    };
    ;
    SucursalVeterinaria.prototype.modificarProveedor = function () {
        console.log("Modificar proveedor.");
        var id = rs.questionInt("Ingrese el id del proveedor a modificar: ");
        var proveedorAModificar = this.proveedores.find(function (proveedor) { return proveedor.id === id; });
        if (proveedorAModificar) {
            var nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
            var nuevoTelefono = rs.question("Inmgrese el nuevo telefono: ");
            proveedorAModificar.nombre = nuevoNombre;
            proveedorAModificar.telefono = nuevoTelefono;
            this.proveedores.push(proveedorAModificar);
            console.log("Proveedor correctamente modificado!");
        }
        else {
            console.log("No se encontro el ID...");
        }
        funProveedor_1.funProveedor.agregarProveedor(this.proveedores);
    };
    ;
    SucursalVeterinaria.prototype.eliminarProveedor = function (id) {
        console.log("Eliminar proveedor.");
        var idBorrar = rs.questionInt("Ingrese el ID de proveedor que desea eliminar: ");
        var recordIndex = this.proveedores.findIndex(function (proveedores) { return proveedores.id === idBorrar; });
        if (recordIndex !== -1) {
            var eliminar = this.proveedores[recordIndex];
            var confirmacion = rs.keyInYN("Quieres eliminar ".concat(eliminar, " (Y/N)"));
            if (confirmacion) {
                this.proveedores.splice(recordIndex, 1);
                funProveedor_1.funProveedor.agregarProveedor(this.proveedores);
            }
            else {
                console.log("Eliminacion cancelada. \n");
            }
        }
        else {
            console.log("Proveedor no encontrado.");
        }
    };
    ;
    //PROVEEDOR
    //VETERINARIA
    SucursalVeterinaria.prototype.leerVeterinaria = function () {
        var leerVeterinaria = fs.readFileSync("./veterinas/veterinaria.json", { encoding: "utf-8" });
        if (leerVeterinaria) {
            this.veterinaria = JSON.parse(leerVeterinaria);
            console.log("VETERINARIAS.");
            if (!this.veterinaria.length) {
                console.log("No se encontraron  veterinarias.");
            }
            else {
                this.veterinaria.forEach(function (veterinaria) {
                    console.log("ID: ".concat(veterinaria.id, "\n          NOMBRE: ").concat(veterinaria.nombre, "\n          DIRECCION: ").concat(veterinaria.direccion));
                });
            }
            ;
        }
        else {
            console.log("Algo salio mal, volver ahacer el codigo completo yam no doy mas!!!!!");
        }
        console.log("Salio todo bien???????", leerVeterinaria);
    };
    ;
    SucursalVeterinaria.prototype.agregarVeterinaria = function () {
        console.log("Nueva veterinaria.");
        var leerVeterinaria = fs.readFileSync("./veterinarias/veterinaria.json", { encoding: "utf-8" });
        if (leerVeterinaria) {
            this.veterinaria = JSON.parse(leerVeterinaria);
            var id = this.generarIdUnico();
            var nombre = rs.question("Ingrese el nombre de VETERINARIA: ");
            var direccion = rs.question("Ingrese la direccion");
            var veterinaria = new veterinaria_1.Veterinaria(nombre, direccion);
            this.veterinaria.push(veterinaria);
            console.log(veterinaria);
        }
        else {
            console.log("Intentalo de nuevo.");
        }
        funVeterinaria_1.funVeterinaria.agregarVeterinaria(this.veterinaria);
    };
    ;
    SucursalVeterinaria.prototype.modificarVeterinaria = function () {
        console.log("Modificar veterinaria.");
        var id = rs.questionInt("Ingrese el ID de la veterinaria a modificar: ");
        var veterinariaAModificar = this.veterinaria.find(function (veterinaria) { return veterinaria.id === id; });
        if (veterinariaAModificar) {
            var nuevoNombre = rs.question("Ingrese el nuevo nombre: ");
            var nuevaDireccion = rs.question("Ingrese la nueva direccion: ");
            veterinariaAModificar.nombre = nuevoNombre;
            veterinariaAModificar.direccion = nuevaDireccion;
            this.veterinaria.push(veterinariaAModificar);
            console.log("Veterinaria modificada correctamente!");
        }
        else {
            console.log("ID no encontrado");
        }
        funVeterinaria_1.funVeterinaria.agregarVeterinaria(this.veterinaria);
    };
    ;
    SucursalVeterinaria.prototype.eliminarVeterinaria = function () {
        console.log("Eliminar veterinaria");
        var idBorrar = rs.questionInt("Ingre el id de veterinaria que desea eliminar: ");
        var recordIndex = this.veterinaria.findIndex(function (veterinaria) { return veterinaria.id === idBorrar; });
        if (recordIndex !== -1) {
            var eliminar = this.veterinaria[recordIndex];
            var confirmacion = rs.keyInYN("Quieres eliminar ".concat(eliminar.id, "? (Y/N)"));
            if (confirmacion) {
                this.veterinaria.splice(recordIndex, 1);
                funVeterinaria_1.funVeterinaria.agregarVeterinaria(this.veterinaria);
            }
            else {
                console.log("Eliminacion cancelada. \n");
            }
        }
    };
    ;
    return SucursalVeterinaria;
}());
exports.SucursalVeterinaria = SucursalVeterinaria;
var suc = new SucursalVeterinaria("vet", "Direccion 123");
var veterinaria01 = new veterinaria_1.Veterinaria("vetterinaria01", "Direccion 123");
suc.agregarVeterinaria();
suc.agregarCliente();
// suc.agregarVeterinaria();
// suc.modificarVeterinaria();
// suc.eliminarVeterinaria();
// const cliente01 = new Cliente(0, "", "");
// suc.agregarCliente();
// const paciente01 = new Paciente();
// paciente01.altaPaciente("","","");
// const prov01 = new Proveedor("","");
// suc.agregarProveedor();
