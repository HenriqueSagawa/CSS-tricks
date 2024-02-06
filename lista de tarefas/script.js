let input = document.getElementById('input')
let botao = document.getElementById('btn')
let listacompleta = document.getElementById('tarefas')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let tarefas = []

function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function carregar() {
    const tarefasJson = localStorage.getItem('tarefas');
    if (tarefasJson != null){
        tarefas = JSON.parse(tarefasJson)
        mostrar()
    }
}

carregar()

function clique() {
    adicionar()
}

function adicionar() {
    tarefas.push({
        tarefa: input.value,
        concluida: false
    })
    mostrar()
    input.value = ''
    salvar()
}

function mostrar() {
    let novaLista = ''

    tarefas.forEach( (item, index) => {
        novaLista = novaLista + `
        <li class="${item.concluida && 'concluido'}">
            <button onclick="concluir(${index})"><p>Concluir</p></button>
            <p>${item.tarefa}</p>
            <button id="btn2" onclick="remover(${index})"><p>Remover</p></button>
        </li>
        `

        listacompleta.innerHTML = novaLista

    })

    if (tarefas.length === 0) {
        listacompleta.innerHTML = '';
    }
}

function remover(index) {
    tarefas.splice(index, 1)
    mostrar()
    salvar()
}

function concluir(index) {
    tarefas[index].concluida = !tarefas[index].concluida
    mostrar()
    salvar();
}

botao.addEventListener('click', clique)