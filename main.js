$(document).ready(function () {
    console.log(document.querySelector('#tarefa-insert'));
    // console.log($('#tarefa-insert'));

    // certo
    console.log(document.querySelector('#tarefa-insert'));

    $('form').on('submit', function (e) {
        e.preventDefault();



        const tarefaInsertinput = $('#tarefa-insert').val();
        const novaTarefa = $(`<li>${tarefaInsertinput}</li>`);

        // Adicionar o template na ul 
        novaTarefa.appendTo('ul');

        $(novaTarefa).fadeIn();


        // limpar input
        $('#tarefa-insert').val('')



    });
    // riscar tarefas concluidas
    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('riscada');
    });


})