$(document).ready(function() {
    // Función para validar las palabras "internet," "ciencia," "web," y "malware"
    function validarPalabras() {
        // Obtén el valor de las casillas 2_2 a 2_8 para "internet"
        var palabraInternet = "";
        for (var i = 2; i <= 9; i++) {
            var inputIdInternet = "2_" + i + "_input";
            palabraInternet += $("#" + inputIdInternet).val();
        } 

        // Obtén el valor de las casillas 1_2 a 8_2 para "ciencia"
        var palabraCiencia = "";
        for (var j = 1; j <= 8; j++) {
            var inputIdCiencia = j + "_2_input";
            palabraCiencia += $("#" + inputIdCiencia).val();
        }

        // Obtén el valor de las casillas 1_8 a 3_8 para "web"
        var palabraWeb = "";
        for (var k = 1; k <= 3; k++) {
            var inputIdWeb = k + "_8_input";
            palabraWeb += $("#" + inputIdWeb).val();
        }

        // Obtén el valor de las casillas 4_5 a 4_10 para "malware"
        var palabraMalware = "";
        for (var n = 4; n <= 10; n++) {
            var inputIdMalware =  n + "_5_input";
            palabraMalware += $("#" + inputIdMalware).val();
        }

        //obten el valor de la palabra hardware 
        var palabraHardware = "";
        for (var l = 1; l <= 9; l++) {
            var inputIdHardware = "7_" + l + "_input";
            palabraHardware += $("#" + inputIdHardware).val();
        }

           // Establecer el color del texto de la fila 1 en negro
           for (var col = 1; col <= 10; col++) {
            var inputId = "1_" + col + "_input";
            $("#" + inputId).css("color", "black");
        }

        // Restaurar el color original de la casilla que contiene una letra en la fila 1
        for (var col = 1; col <= 10; col++) {
            var inputId = "1_" + col + "_input";
            if ($("#" + inputId).val() !== "") {
                $("#" + inputId).css("color", ""); // Restaura el color original
            }
        }

        // Verifica si las palabras son correctas
        var mensaje = "";

        if (palabraCiencia.toLowerCase() === "ciencia") {
            mensaje += "La palabra '1' es válida  .\n\n";
        } else {
            mensaje += "La palabra '1' no es válida  .\n\n";
        }

        if (palabraWeb.toLowerCase() === "web") {
            mensaje += "La palabra '2' es válida  .\n\n";
        } else {
            mensaje += "La palabra '2' no es válida  .\n\n";
        }

        if (palabraInternet.toLowerCase() === "internet") {
            mensaje += "La palabra '3' es válida  .\n\n";
        } else {
            mensaje += "La palabra '3' no es válida  .\n\n";
        }

        if (palabraMalware.toLowerCase() === "malware") {
            mensaje += "La palabra '4' es válida  .\n\n";
        } else {
            mensaje += "La palabra '4' no es válida  .\n\n";
        }

        if (palabraHardware.toLowerCase() === "hardware") {
            mensaje += "La palabra '5' es válida  .";
        } else {
            mensaje += "La palabra '5' no es válida  .";
        }

        // Muestra el mensaje
        $("#mensaje").text(mensaje);
    }

    // Asigna la función validarPalabras al botón "Guardar"
    $("#guardar").click(validarPalabras);

    function mostrarMensajeEnMouseOver(inputId, mensaje) {
        var inputElement = $("#" + inputId);
        var mensajeArriba = $("#mensaje-arriba");
    
        inputElement.mouseenter(function() {
            mensajeArriba.text(mensaje);
            $("body").append(messageDiv);
        });
    
        inputElement.mouseleave(function() {
            mensajeArriba.text("");
        });
    }
    
    $(document).ready(function() {
        mostrarMensajeEnMouseOver("1_2_input", "1. Estudio sistemático del mundo natural");
        mostrarMensajeEnMouseOver("1_8_input", "2. Tejido de información en línea");
        mostrarMensajeEnMouseOver("2_2_input", "3. Red global de información y comunicación");
        mostrarMensajeEnMouseOver("4_5_input", "4. Software malicioso que puede dañar o infiltrarse en sistemas informáticos");
        mostrarMensajeEnMouseOver("7_1_input", "5. Componentes físicos de una computadora");
    });
    
}); 