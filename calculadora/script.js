function adicionar(num) {
    const valor = document.querySelector('.valor').value;

    document.querySelector('.valor').value = valor + num;
}

function limpar() {
    document.querySelector('.valor').value = "";
}

function sinal() {
    const valor = document.querySelector('.valor').value;

    document.querySelector('.valor').value = valor * -1;
}

function calcular() {
    const valor = document.querySelector('.valor').value;

    document.querySelector('.valor').value = eval(valor);
}