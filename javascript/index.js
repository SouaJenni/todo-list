const botao = document.getElementById('limpar');
const formulario = document.querySelector('form');
const entradaDeTexto = document.getElementById('afazeres');
const lista = document.getElementById('listaDeAfazeres');

const adicionarAfazer = (e) => {

    e.preventDefault();
    const texto = entradaDeTexto.value;
    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
    entradaDeTexto.value = '';
}

const limparLista = () => {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}

botao.addEventListener('click', limparLista);
formulario.addEventListener('submit', adicionarAfazer);
