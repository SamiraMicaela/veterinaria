import { Proveedor } from "./proveedor";
import * as fs from "node:fs";

export class funProveedor{
    proveedor: Proveedor[];
    constructor(){
        this.proveedor;
    };

    static leerProveedor(){
        try {
            const proveedorData = fs.readFileSync("./proveedor.ts", {encoding: "utf-8"});
            console.log("Procesando...");
            return JSON.parse(proveedorData) as Proveedor[];
        } catch (error) {
            console.log("Error inesperado, intente nuevamente.");
        }
    };

    static agregarProveedor(proveedorData: Proveedor[]){
        try {
            fs.writeFileSync("./proveedor.ts", JSON.stringify(proveedorData, null, 2), {encoding: "utf-8"});
            console.log("Proceso exitoso!");
        } catch (error) {
            console.log("Error inesperado, intentalo nuevamente.");
        }
    }
}