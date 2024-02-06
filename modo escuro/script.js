const darkbtn = document.getElementById('darkbutton');

darkbtn.addEventListener('change', function () {
    if (darkbtn.checked) {
        ativarModoEscuro();
    } else {
        desativarModoEscuro();
    }
})

function ativarModoEscuro() {
    document.body.classList.add('dark');
    localStorage.setItem('modoEscuro', 'ativado');
}

function desativarModoEscuro() {
    document.body.classList.remove('dark');
    localStorage.setItem('modoEscuro', 'desativado');
}

window.onload = function () {
    const modoEscuro = localStorage.getItem('modoEscuro');
    if (modoEscuro == 'ativado') {
        ativarModoEscuro();
        darkbtn.checked = true;
    } else {
        desativarModoEscuro();
        darkbtn.checked = false;
    }
}