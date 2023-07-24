const form = document.getElementById('form-numeros');
const numeroAinput = document.getElementById('numero-a');
const numeroBinput = document.getElementById('numero-b');
const certoMessage = document.querySelector('.certo');
const erradoMessage = document.querySelector('.errado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroA = parseFloat(numeroAinput.value);
    const numeroB = parseFloat(numeroBinput.value);

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


});