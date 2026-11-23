// Al hacer clic en la caja padre
document.getElementById("cajaPadre").addEventListener("click", function() {
  alert("Has pulsado el padre");
});

// Al hacer clic en el botón hijo
document.getElementById("botonHijo").addEventListener("click", function(e) {
  alert("Has pulsado el botón hijo");
  
  // Detenemos la propagación para que el evento NO suba al padre
  e.stopPropagation(); 
});