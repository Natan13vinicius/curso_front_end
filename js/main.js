$(document).ready(function () {
    // telefone
    $('#telefone').mask('(00) 0000-0000', {
        placeholder: '(DD) 0000-0000'

    })
    // cpf
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    // cep
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

})