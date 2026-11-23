 function mensaje() {
        alert("Has pulsado sobre un botón");
      }

      window.onload = function () {
        // Busca y guarda en una colección todos los elementos <input>
        var botones = document.getElementsByTagName("input");
        // Bucle para recorrer uno a uno todos los elementos <input> encontrados
        for (var i = 0; i < botones.length; i++) {
          if (botones[i].type === "button") {
            botones[i].onclick = mensaje;
          }
        }
      };