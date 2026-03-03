// Criando a função range personalizada (estilo Python)
function range(start, end) {
    let list = [];
    for (let i = start; i < end; i++) {
        list.push(i);
    }
    return list;
}

// 1. Lista de nomes de convidados
const convidados = ["Ana", "Bernardo", "Amanda", "Carlos", "Adriano", "Beatriz", "Valentina"];

// Selecionando elementos do HTML
const ulMaiuscula = document.getElementById('lista-maiuscula');
const ulLongos = document.getElementById('lista-longos');
const pContagem = document.getElementById('contagem-a');

let contagemA = 0;
let nomesLongos = [];

// 2. Usando o range() para iterar sobre a lista
const indices = range(0, convidados.length);

indices.forEach(i => {
    const nome = convidados[i];
    
    // Imprimir em letras maiúsculas no HTML
    const li = document.createElement('li');
    li.textContent = nome.toUpperCase();
    ulMaiuscula.appendChild(li);

    // 3. Contar nomes que começam com 'A'
    if (nome.toUpperCase().startsWith('A')) {
        contagemA++;
    }

    // 4. Criar lista com nomes > 5 letras
    if (nome.length > 5) {
        nomesLongos.push(nome);
    }
});

// Exibindo os resultados finais
pContagem.textContent = `Total de nomes que começam com 'A': ${contagemA}`;

nomesLongos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    ulLongos.appendChild(li);
});
