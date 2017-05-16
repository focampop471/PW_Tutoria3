/*
Juan Carlos Torres
Hernan Laborde
Andres Ocampo 
**/

//El arreglo de errores, almacenará los errores de validación al momento de registrarse
var erroresValidacion = [];

$(document).ready(function() {
    $('#enviar').click(function() {
        validarRegistro($('#nombre').val(), $('#apellido').val());
    });

    validarRegistro = function(nombre, apellido) {
        limpiarArreglo(erroresValidacion);
        //Validaciones -->
        if (nombre === '') {
            //Si el correo esta vacío agregar un error a la lista de errores.
            erroresValidacion.push('El campo nombre electronico es requerido');
        }
        if (apellido === '') {
            //Si el nombre esta vacío agregar un error a la lista de errores.
            erroresValidacion.push('El campo apellido es requerido');
        }

        //Muestra los errores encontrados
        mostrarValidaciones();
    }

    limpiarArreglo = function(array) {
        while (array.length > 0) {
            array.pop();
        }
    }

    mostrarValidaciones = function() {
        var errores = '';
        for (i = 0; i < erroresValidacion.length; i++) {
            errores += '\n-' + erroresValidacion[i];
        }

        alert('Corrija los siguiente errores antes de continuar:' + errores);
    }
});