var radioColores = document.getElementsByName("color");
var miParrafo = document.getElementById("parrafo");

// 2. Detectamos cuando el usuario cambia la opción seleccionada (evento onchange)
for (var i = 0; i < radioColores.length; i++) {
    radioColores[i].onchange = function() {
        // Obtenemos el valor de la opción elegida (green, blue o red)
        var colorSeleccionado = this.value;

        // Aplicamos ese color a la letra del párrafo usando style.color
        miParrafo.style.color = colorSeleccionado;
    };
}