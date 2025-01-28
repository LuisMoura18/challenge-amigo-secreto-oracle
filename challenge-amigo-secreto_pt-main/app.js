// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    amigoInput.value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}
function atualizarListaAmigos() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Ainda não há amigos para sortear. Adicione ao menos um amigo.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

