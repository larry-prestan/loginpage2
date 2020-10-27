$(function() {

    //boton cancelar//
    $('#btncancelar').click(function(e) {
        alert(" boton cancelar... ");
        $('#formlogin')[0].reset();
        e.preventDefault();
    });

    //boton Entrar//
    $('#btnentrar').click(function(e) {
        alert(" boton Entrar... ");
        $('#formlogin')[0].reset();
        e.preventDefault();

    });
});