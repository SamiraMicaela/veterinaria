import { Especies } from "./especies";

export class Exoticos extends Especies{
    constructor(raza:string,edad:string,sexo:string){
        super(raza,edad,sexo)
    };
}