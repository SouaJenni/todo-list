const botao = document.getElementById('limpar');
const formulario = document.querySelector('form');
const entradaDeTexto = document.getElementById('afazeres');
const lista = document.getElementById('listaDeAfazeres');

const coisasAFazer = [];

const salvos = JSON.parse(localStorage.getItem('Afazeres')) || [];
for(const fazer of salvos){
    adicionarItem(fazer);
}

const adicionarAfazer = (e) => {
    e.preventDefault();
    const texto = entradaDeTexto.value;
    adicionarItem(texto);
    entradaDeTexto.value = '';
    localStorage.setItem('Afazeres', JSON.stringify(coisasAFazer));
}

function adicionarItem(texto){
    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
    coisasAFazer.push(texto);
}

const limparLista = () => {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    localStorage.clear();
}

botao.addEventListener('click', limparLista);
formulario.addEventListener('submit', adicionarAfazer);

