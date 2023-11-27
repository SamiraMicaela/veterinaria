import { Cliente } from "./cliente";
import * as fs from "node:fs";
import * as rs from "readline-sync";

export class funClientes {
    cliente: Cliente[];
    constructor() {
        this.cliente = [];
    };

    static leerCliente() {
        try {
            const clienteData = fs.readFileSync("./cliente.json", { encoding: "utf-8" });
            console.log("Procesando clientes...");
            return JSON.parse(clienteData) as Cliente[];
        } catch (error) {
            console.log("Error inesperado, intente de nuevo por favor.");
        }
      };
    
      static agregarCliente(clienteData: Cliente[]) {
          try {
              fs.writeFileSync("./cliente.json", JSON.stringify(clienteData, null, 2), { encoding: "utf-8" });
              console.log("Cliente agregado con exito.");
          }   catch (error) {
             console.log("Error inesperado, intentelo nuevamente.");
        }
      };
    
}

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