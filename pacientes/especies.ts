import { Gatos } from "./gatos";
import { Perro } from "./perro";
import { Exoticos } from "./exoticos";
export class Especies {
    raza: string;
    edad: string;
    sexo: string;

    constructor(raza:string,edad:string,sexo:string){
        this.raza=raza;
        this.edad=edad;
        this.sexo=sexo;
    }
}