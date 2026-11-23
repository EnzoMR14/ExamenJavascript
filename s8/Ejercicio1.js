document.getElementById("nombre").focus();

var selectAficion = document.getElementById("aficion");
selectAficion.onchange = mostrarInfoAficion;


var observaciones = document.getElementById("observaciones");
observaciones.onkeypress = function() {
    return limitarObservaciones(150);
};

// 4. Asignar la función de validación al evento 'onsubmit' del formulario
var formulario = document.querySelector("form");
formulario.onsubmit = function() {
    return validarFormulario();
};

function mostrarInfoAficion() {
    var lista = document.getElementById("aficion");
    var longitud = lista.options.length;         // Longitud total de la lista
    var indice = lista.selectedIndex;            // Índice seleccionado
    var valor = lista.options[indice].value;     // Valor de la opción seleccionada

    alert("La longitud de la lista es " + longitud + "\n" +
          "El índice seleccionado es el " + indice + "\n" +
          "El valor del índice seleccionado es " + valor);
}

function limitarObservaciones(maximoCaracteres) {
    var elemento = document.getElementById("observaciones");


    // Si ya se alcanzó o superó el límite, se bloquea la escritura
    if (elemento.value.length >= maximoCaracteres) {
        return false;
    }

}
function validarFormulario() {
    
    // Validación 1: El campo DNI debe ser obligatorio (sin expresiones regulares)
    var dni = document.getElementById("DNI").value;
    if (dni == "" || dni == null) {
        alert("El campo DNI es obligatorio y no puede estar vacío.");
        document.getElementById("DNI").focus();
        return false; // Cancela el envío
    }

    // Validación 2: El teléfono debe tener exactamente 9 dígitos y ser numérico (sin expresiones regulares)
    var telf = document.getElementById("telefono").value;
    
    // Comprobamos que tenga una longitud de 9 y que no sea NaN (no sea un número)
    if (telf.length != 9 || isNaN(telf) || !/^\d{9}$/.test(telf)) {
        alert("El teléfono debe estar formado por nueve dígitos consecutivos.");
        document.getElementById("telefono").focus();
        return false; // Cancela el envío
    }

    alert("¡Formulario validado con éxito!");
    return true;
}