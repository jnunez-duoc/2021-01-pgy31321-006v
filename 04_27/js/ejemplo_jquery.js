 $(document).ready(function () {
            var btnEnviar = $('#btnEnviar')
            btnEnviar.click(function () {
                var txtNombres = $('#txtNombres').val()
                console.log('El valor de txtNombres es: ' + txtNombres)
                console.log('Has realizado click sobre el id btnEnviar.')
            })
        })