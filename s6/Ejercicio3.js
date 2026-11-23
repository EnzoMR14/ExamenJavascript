// Función que se encarga de cambiar el tamaño de la fuente según el evento del ratón.
// Recibe 'e' como parámetro que representa el evento ocurrido.
function cambiarTamano(event) {
        

        if (event.type === "mouseover") {
          this.style.fontSize = "16pt";
        } else if (event.type === "mouseout") {
          this.style.fontSize = "12pt";
        }
      }

      window.onload = function () {
        var texto = document.getElementById("texto");
        texto.onmouseover = cambiarTamano;
        texto.onmouseout = cambiarTamano;
      };