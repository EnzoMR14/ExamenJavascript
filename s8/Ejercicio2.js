// 1. Capturamos el cuadro de lista y el párrafo por su ID
var listaColores = document.getElementById("selectorColor");
var miParrafo = document.getElementById("parrafo");

// 2. Detectamos cuando el usuario cambia la opción seleccionada (evento onchange)
listaColores.onchange = function() {
    // Obtenemos el valor de la opción elegida (green, blue o red)
    var colorSeleccionado = listaColores.value;

    // Aplicamos ese color a la letra del párrafo usando style.color
    miParrafo.style.color = colorSeleccionado;
};