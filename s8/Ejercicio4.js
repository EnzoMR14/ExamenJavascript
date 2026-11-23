// 1. Capturamos los elementos del DOM por su ID
var miParrafo = document.getElementById("parrafo");
var checkNegrita = document.getElementById("checkNegrita");
var checkCursiva = document.getElementById("checkCursiva");

// 2. Detectamos cuando el usuario cambia el estado de los checkboxes (evento onchange)
checkNegrita.onchange = function() {
    // Si el checkbox de negrita está marcado, aplicamos la negrita al párrafo
    if (checkNegrita.checked) {
        miParrafo.style.fontWeight = "bold";
    } else {
        miParrafo.style.fontWeight = "normal";
    }
};

checkCursiva.onchange = function() {
    // Si el checkbox de cursiva está marcado, aplicamos la cursiva al párrafo
    if (checkCursiva.checked) {
        miParrafo.style.fontStyle = "italic";
    } else {
        miParrafo.style.fontStyle = "normal";
    }
};