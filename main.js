const form = document.getElementById('form-valores');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    compararValores();
});

function compararValores() {
    const inputCampoA = document.getElementById('valor1');
    const inputCampoB = document.getElementById('valor2');

    if (inputCampoA <= inputCampoB) {
        alert(`Parabéns, o segundo valor: ${valor2.value}, é maior que o primeiro valor: ${valor1.value}`);
    } else {
        alert(`Tente novamente, o primeiro valor: ${valor1.value} é maior que o segundo valor: ${valor2.value}`);
    }

    inputCampoA.value = ''
    inputCampoB.value = ''
}