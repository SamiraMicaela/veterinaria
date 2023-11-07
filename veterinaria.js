const fs = require('fs');
const readline = require('readline');

const clienteFile = 'cliente.json';
const proveedorFile = 'proveedor.json';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- Cargar, guardar, registrar cliente ---
function cargarCliente() {
  try {
    const data = fs.readFileSync(clienteFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarCliente(cliente) {
  fs.writeFileSync(clienteFile, JSON.stringify(cliente, null, 2), 'utf8');
}

function registrarCliente() {
  rl.question('Apellido y Nombre del cliente: ', (Apellido_Nombre) => {
    const cliente = cargarCliente();
    cliente.push({ Apellido_Nombre });
    guardarCliente(cliente);
    console.log(`Cliente ${Apellido_Nombre} registrado exitosamente.`);
    menuPrincipal();
  });
}

// --- Cargar, guardar, borrar cliente ---
function borrarCliente() {
  rl.question('Apellido y Nombre del cliente a borrar: ', (Apellido_Nombre) => {
    const cliente = cargarCliente();
    const indice = cliente.findIndex((c) => c.Apellido_Nombre === Apellido_Nombre);
    if (indice !== -1) {
      cliente.splice(indice, 1);
      guardarCliente(cliente);
      console.log(`Cliente ${Apellido_Nombre} ha sido eliminado.`);
    } else {
      console.log(`No se encontró el cliente ${Apellido_Nombre}.`);
    }
    menuPrincipal();
  });
}

// --- Agregar función para modificar cliente por nombre ---
function modificarCliente() {
  rl.question('Apellido y Nombre del cliente a modificar: ', (Apellido_Nombre) => {
    const cliente = cargarCliente();
    const indice = cliente.findIndex((c) => c.Apellido_Nombre === Apellido_Nombre);
    if (indice !== -1) {
      rl.question('Nuevo Apellido y Nombre: ', (nuevoApellido_Nombre) => {
        cliente[indice].Apellido_Nombre = nuevoApellido_Nombre;
        guardarCliente(cliente);
        console.log(`Cliente ${Apellido_Nombre} ha sido modificado a ${nuevoApellido_Nombre}.`);
        menuPrincipal();
      });
    } else {
      console.log(`No se encontró el cliente ${Apellido_Nombre}.`);
      menuPrincipal();
    }
  });
}

// --- Cargar, guardar, registrar proveedor ---
function cargarProveedor() {
  try {
    const data = fs.readFileSync(proveedorFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarProveedor(proveedor) {
  fs.writeFileSync(proveedorFile, JSON.stringify(proveedor, null, 2), 'utf8');
}

function registrarProveedor() {
  rl.question('Apellido y Nombre del proveedor: ', (Apellido_Nombre) => {
    const proveedor = cargarProveedor();
    proveedor.push({ Apellido_Nombre });
    guardarProveedor(proveedor);
    console.log(`Proveedor ${Apellido_Nombre} registrado exitosamente.`);
    menuPrincipal();
  });
}

// --- Agregar función para borrar proveedor por nombre ---
function borrarProveedor() {
  rl.question('Apellido y Nombre del proveedor a borrar: ', (Apellido_Nombre) => {
    const proveedor = cargarProveedor();
    const indice = proveedor.findIndex((p) => p.Apellido_Nombre === Apellido_Nombre);
    if (indice !== -1) {
      proveedor.splice(indice, 1);
      guardarProveedor(proveedor);
      console.log(`Proveedor ${Apellido_Nombre} ha sido eliminado.`);
    } else {
      console.log(`No se encontró el proveedor ${Apellido_Nombre}.`);
    }
    menuPrincipal();
  });
}

// --- Agregar función para listar clientes ---
function listarClientes() {
  const clientes = cargarCliente();
  console.log('Lista de Clientes:');
  clientes.forEach((cliente, index) => {
    console.log(`${index + 1}. ${cliente.Apellido_Nombre}`);
  });
  menuPrincipal();
}

// --- Menú Principal ---
function menuPrincipal() {
  console.log('\nMenú Principal:');
  console.log('1. Registrar Cliente');
  console.log('2. Borrar Cliente');
  console.log('3. Modificar Cliente');
  console.log('4. Registrar Proveedor');
  console.log('5. Borrar Proveedor');
  console.log('6. Listar Clientes');
  console.log('7. Salir');

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        registrarCliente();
        break;
      case '2':
        borrarCliente();
        break;
      case '3':
        modificarCliente();
        break;
      case '4':
        registrarProveedor();
        break;
      case '5':
        borrarProveedor();
        break;
      case '6':
        listarClientes();
        break;
      case '7':
        console.log('Saliendo...');
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menuPrincipal();
    }
  });
}

// Iniciar la aplicación
console.log('Bienvenido a la Veterinaria.');
menuPrincipal();
