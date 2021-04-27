        // Declarar variables.
        var variable_1 = '30';
        var variable_1 = 'asdsadsadsadsa';
        // var variable_1 = 30;

        var parser_string_a_int = parseInt(variable_1)

        console.log('Variable_1 original: ')
        console.log(variable_1)
        // parser_string_a_int === NaN
        /**
        NaN = Not a Number
        */
        if (isNaN(parser_string_a_int)) {
            console.log('El valor parseado no es númerico')
        } else {
            console.log('Variable_1 parseada a integer: ')
            console.log(parser_string_a_int)
        }