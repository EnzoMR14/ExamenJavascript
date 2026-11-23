 /*function anadirEvento(elemento, tipo, funcion) {
        if (elemento.addEventListener) {
          elemento.addEventListener(tipo, funcion, false);
        } else if (elemento.attachEvent) {
          elemento.attachEvent("on" + tipo, funcion);
        }
      }


  function cambiarTamano(e) {
        var evento = e || window.event;
        var elemento = evento.target || evento.srcElement;

        if (evento.type === "mouseover") {
          elemento.style.fontSize = "16pt";
        } else if (evento.type === "mouseout") {
          elemento.style.fontSize = "12pt";
        }
      }

      function iniciar() {
        var texto = document.getElementById("texto");
        anadirEvento(texto, "mouseover", cambiarTamano);
        anadirEvento(texto, "mouseout", cambiarTamano);
      }

      anadirEvento(window, "load", iniciar);


*/
      function cambiarTamano(event) {
        

        if (event.type === "mouseover") {
          this.style.fontSize = "16pt";
        } else if (event.type === "mouseout") {
          this.style.fontSize = "12pt";
        }
      }

      window.onload = function () {
        var texto = document.getElementById("texto");
        //texto.onmouseover = cambiarTamano;
        //texto.onmouseout = cambiarTamano;
        texto.addEventListener("mouseover", cambiarTamano);
        texto.addEventListener("mouseout", cambiarTamano);
      };
      
  