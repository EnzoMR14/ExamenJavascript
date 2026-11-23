// Función que cancela el comportamiento del enlace
function cancelarEnlace(e) {
  e.preventDefault(); // Evita que el enlace navegue a Google
  alert("El enlace no te lleva a ningún sitio");
}

// Busca el enlace por su ID y le asigna el evento de clic
document.getElementById("enlace").addEventListener("click", cancelarEnlace);