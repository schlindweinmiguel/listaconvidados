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

// Função para pesquisar convidado
function pesquisarConvidado() {
    let pesquisa = document.getElementById('searchInput').value.toLowerCase();  // Captura o texto da barra de pesquisa
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    // Filtra os convidados com base na pesquisa
    let resultados = convidados.filter(nome => nome.toLowerCase().includes(pesquisa));

    // Exibe os resultados da pesquisa
    for (let i = 0; i < resultados.length; i++) {
        let nome = resultados[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(resultados[i]);

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

// Função para filtrar nomes que terminam com uma letra específica
function filtrarComLetra() {
    let letra = prompt("Digite a letra com a qual os nomes devem terminar:").toLowerCase();
    if (!letra || letra.length > 1) {
        alert("Por favor, insira apenas uma letra válida.");
        return;
    }
    
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    let nomesComLetra = convidados.filter(nome => nome.toLowerCase().endsWith(letra));

    // Exibe os nomes filtrados
    for (let i = 0; i < nomesComLetra.length; i++) {
        let nome = nomesComLetra[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(nomesComLetra[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Função para filtrar nomes com exatamente N letras
function filtrarExatamenteN() {
    let n = prompt("Digite o número de letras que o nome deve ter:");
    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    let nomesExato = convidados.filter(nome => nome.length === parseInt(n));

    // Exibe os nomes filtrados
    for (let i = 0; i < nomesExato.length; i++) {
        let nome = nomesExato[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(nomesExato[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Função para mostrar convidados de forma aleatória
function mostrarAleatorio() {
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista

    let convidadosAleatorios = [...convidados].sort(() => Math.random() - 0.5); // Embaralha a lista

    // Exibe os convidados de forma aleatória
    for (let i = 0; i < convidadosAleatorios.length; i++) {
        let nome = convidadosAleatorios[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerConvidado(convidadosAleatorios[i]);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}

// Mostrar todos os nomes ao carregar a página
mostrarTodos();
