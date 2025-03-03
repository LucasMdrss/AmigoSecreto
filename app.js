let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let nome of amigos) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }
    
    let sorteioLista = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteioLista];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
