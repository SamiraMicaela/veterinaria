import { Especies } from "./especies";
export class Mascotas extends Especies{
    nombre:string;
    id: string;
    idCliente:string;

    constructor(raza,edad,sexo,nombre:string,id:string,idCliente:string){
        super(raza,edad,sexo);
        this.nombre=nombre;
        this.id=id;
        this.idCliente=idCliente;
    };
}