        document.getElementById("texto").onmouseover = agrandar;
        document.getElementById("texto").onmouseout = reducir;

        function agrandar() {
          document.getElementById("texto").style.fontSize = "16pt";

        }

        function reducir() {
          document.getElementById("texto").style.fontSize = "12pt";
        }
