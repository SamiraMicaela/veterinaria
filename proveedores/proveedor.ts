import { SucursalVeterinaria } from "../sucursales/sucursalVeterinaria";
export class Proveedor {
    id: number;
    nombre: string;
    telefono: string;

    constructor(nombre: string, telefono: string) {
        this.id = this.generarIdUnico();
        this.nombre = nombre;
        this.telefono = telefono;
    };

    private generarIdUnico(): number {
        // Lógica para generar un ID único
        return Math.floor(Math.random() * 1000) + 1;
    };

    
}