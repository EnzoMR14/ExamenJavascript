// Fuente única de datos de la web. Para cambiar un título o enunciado, edítalo aquí.
// "html" y "js" son rutas relativas a la carpeta de la sección.
const SECCIONES = [
  {
    "id": "s1",
    "carpeta": "s1",
    "titulo": "Programación Básica",
    "corto": "Sección 1",
    "ejercicios": [
      {
        "titulo": "Suma de 5 números y mayores de 100",
        "html": "Ej1.html",
        "enunciado": "Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son mayores de 100."
      },
      {
        "titulo": "Suma de los números mayores de 8",
        "html": "Ej2.html",
        "enunciado": "Almacenar en un array los números 7, 8, 2, 9 y 10. Calcular la suma de los números mayores de 8."
      },
      {
        "titulo": "Estación correspondiente al mes",
        "html": "Ej3.html",
        "enunciado": "Introducir un mes y decir a qué estación pertenece. Ej: Dime un mes: enero → Estamos en Invierno. Diciembre, enero y febrero son invierno; marzo, abril y mayo, primavera; junio, julio y agosto, verano; septiembre, octubre y noviembre, otoño."
      },
      {
        "titulo": "Número par o impar",
        "html": "Ej4.html",
        "enunciado": "Introducir un número y decir si es par o impar."
      },
      {
        "titulo": "Precio, IVA y precio total",
        "html": "Ej5.html",
        "enunciado": "Introducir el precio de un artículo. Calcular el IVA y el precio total (con el IVA incluido), redondeado a dos decimales."
      },
      {
        "titulo": "Longitud y formato de una cadena",
        "html": "Ej6.html",
        "enunciado": "Introducir una cadena. Decir la longitud de la cadena. Pasarla a mayúsculas y a minúsculas. Mostrar cada palabra de la cadena por separado, primero normal y después al revés. Aquí hay que utilizar document.write; en el resto de ejercicios, alert."
      }
    ]
  },
  {
    "id": "s2",
    "carpeta": "s2",
    "titulo": "Programación Avanzada",
    "corto": "Sección 2",
    "ejercicios": [
      {
        "titulo": "Precio con IVA usando una función",
        "html": "Ejercicio1.html",
        "enunciado": "Introducir el precio de un artículo. Calcular el IVA y el precio total (con el IVA incluido), redondeado a dos decimales. Hay que utilizar una función."
      },
      {
        "titulo": "Estación del año con switch",
        "html": "Ejercicio2.html",
        "enunciado": "Introducir un mes y decir a qué estación pertenece (sin comprobaciones). Utilizar la estructura switch."
      },
      {
        "titulo": "Objeto navigator y confirm",
        "html": "Ejercicio3.html",
        "enunciado": "Crear una página web que muestre el mensaje «Bienvenido a mi página» con formato H1, la plataforma del navegador que se está utilizando y, con la ventana Confirm, pregunte si queremos continuar. En ese caso saldrá en pantalla el mensaje «continuamos…»."
      },
      {
        "titulo": "Comprobar el navegador",
        "html": "Ejercicio4.html",
        "enunciado": "Crear un programa que permita redimensionar la pantalla a 500x500 en caso de que sea Internet Explorer. Si es otro navegador, que salga el mensaje «Operación no permitida con este navegador»."
      },
      {
        "titulo": "Fecha actual",
        "html": "Ejercicio5.html",
        "enunciado": "Crear una página con el botón «Fecha Actual». Al pinchar debe salir la fecha actual del sistema con el día y el mes en letra. Ej: Lunes, 15 de Octubre de 2012."
      },
      {
        "titulo": "Hora actual y saludo",
        "html": "Ejercicio6.html",
        "enunciado": "Crear una página con el botón «Hora Actual». Al pinchar debe salir un mensaje del tipo «Buenos días, son las 12:30 horas». Buenos días hasta las 14:00, buenas tardes hasta las 20:00 y, a partir de esa hora, buenas noches."
      },
      {
        "titulo": "Cambiar el color de fondo",
        "html": "Ejercicio7.html",
        "enunciado": "Crear una página con tres botones (Azul, Verde y Rojo). Al pinchar en cada uno debe cambiar el fondo de la página al color indicado, con el evento onclick."
      },
      {
        "titulo": "Objeto location",
        "html": "Ejercicio8.html",
        "enunciado": "Mostrar un documento con la URL del documento actual, el pathname de la página y el protocolo utilizado. Insertar también un botón que cargue la página de Google."
      },
      {
        "titulo": "Abrir y cerrar una ventana",
        "html": "Ejercicio9.html",
        "enunciado": "Crear una página con el botón Abrir. Al pinchar debe aparecer otra ventana que contenga el botón Cerrar. Al pinchar en él se vuelve a la página inicial."
      }
    ]
  },
  {
    "id": "s3",
    "carpeta": "s3",
    "titulo": "Anexo Programación Avanzada",
    "corto": "Sección 3",
    "ejercicios": [
      {
        "titulo": "Aviso al pasar sobre un hipervínculo",
        "html": "Ejercicio1.html",
        "enunciado": "Crear una página web con un hipervínculo. Cada vez que el ratón pase por encima del enlace debe salir un alert avisando de que estamos encima de un hipervínculo."
      },
      {
        "titulo": "Validar que el DNI no esté vacío",
        "html": "Ejercicio2.html",
        "enunciado": "Crear un formulario básico con el campo DNI y el botón Enviar. Si el usuario deja el campo DNI vacío, al pulsar Enviar saldrá un alert indicando que el campo no tiene datos."
      },
      {
        "titulo": "Sumar 10 e inicializar",
        "html": "Ejercicio3.html",
        "enunciado": "Crear una caja de texto con un valor inicial de 0 y dos botones: Sumar e Inicializar. Cada vez que se pinche en Sumar el valor aumenta de 10 en 10; Inicializar lo vuelve a poner a 0."
      },
      {
        "titulo": "Adivina el número",
        "html": "Ejercicio4.html",
        "enunciado": "Introducir un número del 1 al 10. Generar un número aleatorio: si coincide, mensaje de felicitación; si no, avisar de que se ha fallado."
      },
      {
        "titulo": "Bienvenida y apertura con retraso",
        "html": "Ejercicio5.html",
        "enunciado": "Crear un documento que al cargarse muestre un mensaje de bienvenida. Pasados 20 segundos debe abrir otro documento nuevo."
      },
      {
        "titulo": "Evaluar una cadena con eval",
        "html": "Ejercicio6.html",
        "enunciado": "Partiendo de la cadena cadena=\"2+2\", utilizar la función eval para ejecutarla y mostrar la suma."
      }
    ]
  },
  {
    "id": "s4",
    "carpeta": "s4",
    "titulo": "DOM",
    "corto": "Sección 4",
    "ejercicios": [
      {
        "titulo": "Añadir, insertar, reemplazar, borrar y clonar párrafos",
        "html": "Ejercicio1.html",
        "enunciado": "Página con un párrafo inicial «Este es mi primer párrafo» y botones: Añadir párrafo (detrás del último), Insertar párrafo (detrás del primero), Reemplazar párrafo (cambia el segundo por «Párrafo reemplazado»), Borrar párrafo (elimina el que hay detrás del primero) y Clonar div (duplica la estructura div en ese momento)."
      },
      {
        "titulo": "Manipular una lista de animales",
        "html": "Ejercicio2.html",
        "enunciado": "Página con una lista desordenada inicial de tres animales. Los botones funcionan como en el ejercicio anterior pero con los elementos de la lista. «Crear Sublista dentro de león con funciones DOM» crea una lista desordenada dentro del primer elemento; la versión con innerHTML hace lo mismo con esa propiedad."
      },
      {
        "titulo": "Cambiar el color de fondo de un div",
        "html": "Ejercicio3.html",
        "enunciado": "Página con un div con el texto «Bienvenido a esta página de prueba de colores», inicialmente en blanco, y tres botones que cambian su fondo: Azul, Verde y Restaurar color inicial (blanco)."
      },
      {
        "titulo": "Contar imágenes y enlaces",
        "html": "Ejercicio4.html",
        "enunciado": "Página con varias imágenes y enlaces y dos botones: «Número de Imágenes» y «Número de enlaces». Cada uno muestra con alert el total correspondiente."
      },
      {
        "titulo": "Crear una caja de texto con DOM",
        "html": "Ejercicio5.html",
        "enunciado": "Crear un elemento (por ejemplo una caja de texto) y darle atributos. Hay que evitar innerHTML, salvo en el ejercicio 2, y usar funciones DOM."
      }
    ]
  },
  {
    "id": "s5",
    "carpeta": "s5",
    "titulo": "Anexo DOM",
    "corto": "Sección 5",
    "ejercicios": [
      {
        "titulo": "Enlaces de la página",
        "html": "Ejercicio3.html",
        "enunciado": "Documento con 3 párrafos que contienen al menos un enlace cada uno (1, 2 y 3 enlaces) y tres botones: «Número de enlaces» (total del documento), «Referencia enlaces» (referencia de todos los enlaces) y «Referencia enlaces por párrafo». Usar funciones DOM; los datos se pueden mostrar con alert o con innerHTML en un div.",
        "num": 3
      },
      {
        "titulo": "Enlaces y colores de los párrafos",
        "html": "Ejercicio4.html",
        "enunciado": "Modificar el ejercicio anterior con dos botones nuevos: «Párrafos verdes» (todos los párrafos en verde) y «Desactivar color» (vuelven al color inicial). Usar funciones DOM para acceder a los nodos y a sus atributos.",
        "num": 4
      }
    ]
  },
  {
    "id": "s6",
    "carpeta": "s6",
    "titulo": "Eventos",
    "corto": "Sección 6",
    "ejercicios": [
      {
        "titulo": "Eventos en línea (onmouseover / onmouseout)",
        "html": "Ejercicio1.html",
        "js": "Ejercicio1.js",
        "enunciado": "Poner en un div el texto «Al pasar por encima de este texto cambiará de tamaño». Inicialmente 12pt; al pasar por encima aumenta a 16pt y al salir vuelve al original. Hacerlo con funciones externas y this."
      },
      {
        "titulo": "Eventos como propiedades del DOM",
        "html": "Ejercicio2.html",
        "js": "Ejercicio2.js",
        "enunciado": "Hacer el ejercicio anterior utilizando la estructura semántica para construir y llamar al evento."
      },
      {
        "titulo": "Un solo manejador con el objeto event",
        "html": "Ejercicio3.html",
        "js": "Ejercicio3.js",
        "enunciado": "Realizar el mismo ejercicio utilizando el objeto event para que, según el tipo de evento, aumente o disminuya el tamaño de la letra."
      },
      {
        "titulo": "addEventListener",
        "html": "Ejercicio4.html",
        "js": "Ejercicio4.js",
        "enunciado": "Realizar el ejercicio con attachEvent y con addEventListener, usando algún método o función que sirva a la vez para Internet Explorer y para el resto de navegadores."
      },
      {
        "titulo": "Solo números en una caja de texto",
        "html": "Ejercicio5.html",
        "js": "Ejercicio5.js",
        "enunciado": "Crear un formulario con un campo de texto que solo permita introducir números, con el evento onkeypress y las propiedades keyCode y charCode."
      },
      {
        "titulo": "Mensaje al pulsar cualquier botón",
        "html": "Ejercicio6.html",
        "js": "Ejercicio6.js",
        "enunciado": "Crear una página con varios botones para que al pulsar cualquiera salga «Has pulsado sobre un botón». No se sabe cuántos botones habrá, por lo que no se puede hacer de forma estática."
      }
    ]
  },
  {
    "id": "s7",
    "carpeta": "s7",
    "titulo": "Anexo Eventos",
    "corto": "Sección 7",
    "ejercicios": [
      {
        "titulo": "Cancelar el envío de un formulario",
        "html": "Ejercicio1.html",
        "js": "Ejercicio1.js",
        "enunciado": "Crear un formulario con tres campos. Cancelar el envío mientras haya algún campo vacío, mostrando un mensaje de la cancelación y otro cuando el envío se produzca."
      },
      {
        "titulo": "Cancelar el comportamiento de un enlace",
        "html": "Ejercicio2.html",
        "js": "Ejercicio2.js",
        "enunciado": "Crear un documento con un enlace. Evitar el comportamiento normal para que al hacer clic no vaya al sitio indicado."
      },
      {
        "titulo": "Propagación de eventos",
        "html": "Ejercicio3.html",
        "js": "Ejercicio3.js",
        "enunciado": "Un botón dentro de un div, ambos con evento de clic: evitar que el clic suba al padre con stopPropagation."
      }
    ]
  },
  {
    "id": "s8",
    "carpeta": "s8",
    "titulo": "Formularios",
    "corto": "Sección 8",
    "ejercicios": [
      {
        "titulo": "Formulario completo con validación",
        "html": "Ejercicio1.html",
        "js": "Ejercicio1.js",
        "enunciado": "Construir un formulario con los campos de la imagen. Foco inicial en el nombre; «Incluir mi foto» permite cargar una imagen; la afición es una lista (música, lectura, deporte) que al cambiar (onchange) muestra con alert la longitud de la lista, el índice seleccionado y su valor; observaciones limitado a 150 caracteres; botones «Guardar cambios» y «Borrar datos introducidos» (enviar y resetear). Al enviar se valida: DNI obligatorio y teléfono con nueve dígitos consecutivos, sin espacios ni guiones."
      },
      {
        "titulo": "Cambiar el color con un select",
        "html": "Ejercicio2.html",
        "js": "Ejercicio2.js",
        "enunciado": "Crear un cuadro de lista con los valores verde, azul y rojo. Sobre un párrafo con el texto «Este párrafo cambiará de color con la opción seleccionada del cuadro de lista», aplicar la opción seleccionada para cambiar el color de la letra."
      },
      {
        "titulo": "Cambiar el color con radio buttons",
        "html": "Ejercicio3.html",
        "js": "Ejercicio3.js",
        "enunciado": "Hacer el ejercicio anterior utilizando botones radio para los colores en lugar del cuadro de lista."
      },
      {
        "titulo": "Negrita y cursiva con checkboxes",
        "html": "Ejercicio4.html",
        "js": "Ejercicio4.js",
        "enunciado": "Poner dos checkbox (negrita y cursiva) y un párrafo. Al pinchar en cada uno se aplica el estilo correspondiente al párrafo."
      }
    ]
  }
];
