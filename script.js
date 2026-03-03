// Lista de nomes de convidados
let convidados = [
    "Ana", "Carlos", "Juliana", "Paulo", "Amanda", "Mariana", 
    "Lucas", "Alessandra", "Ricardo", "Tatiane", "Arthur", "Larissa"
];

// Função para mostrar a lista completa
function mostrarTodos() {
    let lista = document.getElementById('guestList');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os nomes

    // Exibe todos os nomes em maiúsculas
    for (let i = 0; i < convidados.length; i++) {
        let nome = convidados[i].toUpperCase();
        let li = document.createElement('li');
        li.textContent = nome;
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
        lista.appendChild(li);
    }
}

// Mostrar todos os nomes ao carregar a página
mostrarTodos();
