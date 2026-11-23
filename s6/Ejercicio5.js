function soloNumeros(evento) {
        // keyCode en Internet Explorer, devuelve uun codigo numérico
        var codigoCaracter = evento.charCode || evento.keyCode;
        
        // Códigos 48 a 57 corresponden a los dígitos del 0 al 9
        if (codigoCaracter >= 48 && codigoCaracter <= 57) {
            return true;
        }
        return false;
    }
