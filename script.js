// Lista de convidados (inicial)
let convidados = [
    "Ana", "Carlos", "Juliana", "Paulo", "Amanda", "Mariana", 
    "Lucas", "Alessandra", "Ricardo", "Tatiane", "Arthur", "Larissa"
];

// Função para adicionar um novo convidado
function adicionarConvidado() {
    let nomeInput = document.getElementById('newGuest');
    let nomeConvidado = nomeInput.value.trim();

    if (nomeConvidado && !convidados.includes(nomeConvidado)) {
        convidados.push(nomeConvidado);
        nomeInput.value = ''; // Limpa o campo de entrada
        mostrarTodos(); // Atualiza a lista
    } else {
        alert("Por favor, digite um nome válido e que ainda não esteja na lista.");
    }
}

// Função para remover um convidado
function removerConvidado(nome) {
    convidados = convidados.filter(convidado => convidado !== nome);
    mostrarTodos(); // Atualiza a lista após remoção
}

// Função para mostrar todos os convidados
function mostrarTodos() {
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os nomes

    // Exibe todos os nomes em maiúsculas
    for (let i = 0; i < convidados.length; i++) {
        let nome = convidados[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;
        
        // Botão para remover convidado
        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(convidados[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Função para filtrar nomes que começam com "A"
function filtrarComA() {
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    let nomesComA = convidados.filter(nome => nome.charAt(0).toUpperCase() === 'A');

    // Exibe os nomes filtrados
    for (let i = 0; i < nomesComA.length; i++) {
        let nome = nomesComA[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(nomesComA[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Função para filtrar nomes com mais de 5 letras
function filtrarMaisDeCinco() {
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    let nomesLongos = convidados.filter(nome => nome.length > 5);

    // Exibe os nomes filtrados
    for (let i = 0; i < nomesLongos.length; i++) {
        let nome = nomesLongos[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(nomesLongos[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Mostrar todos os nomes ao carregar a página
mostrarTodos();
