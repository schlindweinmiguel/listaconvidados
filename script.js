// Função Range personalizada
function range(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) arr.push(i);
    return arr;
}

// Banco de dados de nomes para aleatoriedade
const bancoNomes = ["Ana", "Arthur", "Amanda", "Beatriz", "Bernardo", "Caio", "Douglas", "Elena", "Fabrício", "Gabriel", "Heloísa", "Igor", "Jéssica", "Kevin", "Larissa", "Aline", "Alexandre", "Aparecida", "Washington", "Valentina"];

let listaAtual = [];

// Função para gerar nomes aleatórios
function gerarNovosNomes() {
    listaAtual = [];
    const indices = range(0, 10); // Vamos gerar 10 nomes usando nosso range
    
    indices.forEach(() => {
        const nomeAleatorio = bancoNomes[Math.floor(Math.random() * bancoNomes.length)];
        listaAtual.push(nomeAleatorio);
    });
    
    renderizar('todos');
}

// Função Principal de Renderização com Filtros
function renderizar(filtro) {
    const ul = document.getElementById('lista-exibicao');
    ul.innerHTML = ""; // Limpa a lista atual
    
    let nomesFiltrados = [...listaAtual];

    if (filtro === 'letraA') {
        nomesFiltrados = listaAtual.filter(n => n.toUpperCase().startsWith('A'));
    } else if (filtro === 'longos') {
        nomesFiltrados = listaAtual.filter(n => n.length > 5);
    }

    nomesFiltrados.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });

    document.getElementById('contador-total').textContent = `Total exibido: ${nomesFiltrados.length}`;
}

// Função de Busca em tempo real
function buscarNome() {
    const termo = document.getElementById('inputBusca').value.toUpperCase();
    const itens = document.querySelectorAll('#lista-exibicao li');

    itens.forEach(li => {
        const texto = li.textContent.toUpperCase();
        li.style.display = texto.includes(termo) ? "" : "none";
    });
}

// Inicia a página com nomes
gerarNovosNomes();
