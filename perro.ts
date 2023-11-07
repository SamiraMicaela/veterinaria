import { Especies } from "./especies";
export class Perro extends Especies{
    constructor(raza:string,edad:string,sexo:string){
        super(raza,edad,sexo)
    };
}