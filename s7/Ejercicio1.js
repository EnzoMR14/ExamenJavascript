document.getElementById("formulario").addEventListener("submit", function(evento) {
  var campos = document.getElementsByTagName("input");
  var vacio = false;

  for (var i = 0; i < campos.length; i++) {
    // Comprobamos solo los inputs de tipo texto
    if (campos[i].type === "text" && campos[i].value === "") {
      vacio = true;
    }
  }

  if (vacio) {
    // Cancelamos el envío utilizando el objeto 'evento'
    if (evento.preventDefault) {
      evento.preventDefault();
    } else {
      evento.returnValue = false; // Compatibilidad con Internet Explorer
    }
    alert("Envío cancelado: hay algún campo vacío");
  } else {
    alert("Formulario enviado correctamente");
  }
});