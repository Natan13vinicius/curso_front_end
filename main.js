// pegar os elementos html para o javascript
// const form = document.getElementById('form-numeros');
// const numeroAinput = document.getElementById('numero-a');
// const numeroBinput = document.getElementById('numero-b');
// const certoMessage = document.querySelector('.certo');
// const erradoMessage = document.querySelector('.errado');

// adicionar ouvidor de eventos no evento submit e
// form.addEventListener('submit', function (e) {
// funçao de tirar o comportamento padrao do submit
// e.preventDefault();

// pegar o valor dos 2 inputs e armazenar em uma const
// const numeroA = parseFloat(numeroAinput.value);
// const numeroB = parseFloat(numeroBinput.value);

// validaçao e imprimir mensagens
// if (numeroB > numeroA) {
//     certoMessage.style.display = 'block';
//     erradoMessage.style.display = 'none';
//     numeroAinput.value = "";
//     numeroBinput.value = "";
// } else {
//     certoMessage.style.display = 'none';
//     erradoMessage.style.display = 'block';
//     numeroAinput.value = "";
//     numeroBinput.value = "";
// }


// })

// pegar os elementos html para o javascript
// formulario
const form = document.querySelector('#form-numeros')
// numero a
const numeroAinput = document.querySelector('#numero-a')
// numero b
const numeroBinput = document.querySelector('#numero-b')

// mensagem certo
const certoMensagem = document.querySelector('.certo')
// mensagem errado
const erradoMensagem = document.querySelector('.errado')

// eventos em submit dentro da constante form que foi criada acima
form.addEventListener('submit', function (e) {
    // e preventdefault para tirar o comportamento padrao do botao submit
    e.preventDefault()

    // guardar os valores em const com parsefloat por se tratar de numero
    //  para fazer validaçao nao esquecendo de chamar .value para pegar o valor
    const numeroA = parseFloat(numeroAinput.value)
    const numeroB = parseFloat(numeroBinput.value)

    // executar a validaçao e imprimir as respostas que ja estao no css porem
    //  estao em display none e agora vao para display block

    if (numeroB > numeroA) {
        // executar mensagem de sucesso
        certoMensagem.style.display = 'block';
        erradoMensagem.style.display = 'none';
        numeroAinput.value = ' '
        numeroBinput.value = ' '


    } else {
        erradoMensagem.style.display = 'block'
        certoMensagem.style.display = 'none'
        numeroAinput.value = ' '
        numeroBinput.value = ' '

    }

})






