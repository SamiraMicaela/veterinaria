import { SucursalVeterinaria } from "./sucursales/sucursalVeterinaria";
import { Veterinaria } from "./veterinas/veterinaria";
import { Cliente } from "./clientes/cliente";
import { Proveedor } from "./proveedores/proveedor";
import { Paciente } from "./pacientes/paciente";
import { funClientes } from "./clientes/funCliente";
import { funVeterinaria } from "./veterinas/funVeterinaria";
import { funProveedor } from "./proveedores/funProveedor";
import { funPaciente } from "./pacientes/funPaciente";

const suc01 = new SucursalVeterinaria("San Expedito", "Pedito 123");
const vet01 = new Veterinaria("lucecita", "lucecita 222");
const prov01 = new Proveedor("", "");
const cli01 = new Cliente(0, "", "");
const paci01 = new Paciente();

suc01.agregarVeterinaria();
suc01.agregarProveedor();
suc01.agregarCliente();
suc01.altaPaciente();
vet01.id;
cli01.idCliente;
