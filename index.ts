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
const prov01 = new Proveedor("la mejor pasta base", "2983555666");

suc01.agregarVeterinaria();
suc01.agregarProveedor();
suc01.agregarCliente();
suc01.altaPaciente();
suc01.modificarVeterinaria();
suc01.modificarProveedor();
suc01.modificarCliente();
suc01.modificarPacientes();
suc01.eliminarVeterinaria();
suc01.eliminarProveedor();
suc01.eliminarCliente();
suc01.bajaPaciente();