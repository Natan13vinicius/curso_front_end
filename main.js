// pegar os elementos html para o javascript
const form = document.getElementById('form-numeros');
const numeroAinput = document.getElementById('numero-a');
const numeroBinput = document.getElementById('numero-b');
const certoMessage = document.querySelector('.certo');
const erradoMessage = document.querySelector('.errado');

// adicionar ouvidor de eventos no evento submit e
form.addEventListener('submit', function (e) {
    // funçao de tirar o comportamento padrao do submit
    e.preventDefault();

    // pegar o valor dos 2 inputs e armazenar em uma const
    const numeroA = parseFloat(numeroAinput.value);
    const numeroB = parseFloat(numeroBinput.value);

    // validaçao e imprimir mensagens
    if (numeroB > numeroA) {
        certoMessage.style.display = 'block';
        erradoMessage.style.display = 'none';
        numeroAinput.value = "";
        numeroBinput.value = "";
    } else {
        certoMessage.style.display = 'none';
        erradoMessage.style.display = 'block';
        numeroAinput.value = "";
        numeroBinput.value = "";
    }


})