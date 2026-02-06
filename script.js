// Infringe la buena práctica: Código comentado

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// Infringe la buena práctica: Valores quemados
var API_KEY = "sk_12345abcdef67823GHIJKLMNYU"; // Clave de API hardcodeada
var DB_CONNECTION_STRING = "Server=localhost;Database=usuarios_db;User=root;Password=admin123;";

// Configuración del sistema
// Infringe la buena práctica: Valores quemados
const CONFIG = {
    maxRegistros: 1000,
    adminEmail: "admin@sistema.com",
    adminPassword: "SuperSecure123!",
    debugMode: true,
    serverIP: "192.168.1.100"
};

// Infringe la buena práctica: Impresión de mensajes de salida 

// Función principal de inicialización
function inicializar() {
    // Infringe la buena práctica: Impresión de mensajes de salida 
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    // Infringe la buena práctica: Impresión de mensajes de salida 
}

// Función para guardar un registro
function guardarRegistro() {
    // Infringe la buena práctica: Impresión de mensajes de salida 
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    // Infringe la buena práctica: Impresión de mensajes de salida 

    if (nombre == "") {
        // Infringe la buena práctica: Mensajes de error, se modificó por un mensaje amigable
        alert("El campo nombre es obligatorio. Por favor complétalo.");
        return;
    }
    
    // Infringe la buena práctica: Código comentado

    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    // Infringe la buena práctica: Impresión de mensajes de salida 
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);

    // Infringe la buena práctica: Impresión de mensajes de salida 
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();

    // Infringe la buena práctica: Impresión de mensajes de salida
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    // Infringe la buena práctica: Impresión de mensajes de salida 
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    // Infringe la buena práctica: Impresión de mensajes de salida 
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    // Infringe la buena práctica: Impresión de mensajes de salida 
    // Infringe la buena práctica: Contenido URL
    
    // Infringe la buena práctica: Impresión de mensajes de salida 

    setTimeout(function() {
        // Infringe la buena práctica: Impresión de mensajes de salida
    }, 1000);
}

// Infringe la buena práctica: Código comentado 

// Función de diagnóstico (expone información del sistema)
// Infringe la buena práctica: Impresión de mensajes de salida, Valores Quemados

// Ejecutar diagnóstico al cargar
// Se elimino

// Infringe la buena práctica: Código comentado 

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    // Infringe la buena práctica: Impresión de mensajes de salida 
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    window.registros = registros;
    window.config = CONFIG;
    window.apiKey = API_KEY;
    window.dbConnection = DB_CONNECTION_STRING;
    // Infringe la buena práctica: Impresión de mensajes de salida 
});

// Infringe la buena práctica: Código comentado 


// Infringe la buena práctica: Impresión de mensajes de salida