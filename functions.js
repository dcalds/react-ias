// Memória Principal
memoriaPrincipal = {
    0:'0000010100000000010100100001000000000110',
    1:'0000010100000000011000100001000000000111',
    2:'0000010100000000011100100001000000001000',
    3:'0000010100000000100000100001000000001001',
    4:'0000010100000000100100000000000000000000',
    5:'0000000000000000000000000000000000000001',
    6:'0000000000000000000000000000000000000001',
    7:'0000000000000000000000000000000000000001',
    8:'0000000000000000000000000000000000000001',
    9:'0000000000000000000000000000000000000001'
}

// Unidade de Controle

// Unidade Lógica e Aritimética

// Entrada/Saída


// Gera uma palavra de 40 bits no formato string
function gerarPalavra() {
    palavra = ''
    binario = '01'
    for (let index = 0; index <= 39; index++) {
        palavra += binario.charAt(Math.floor(Math.random() * binario.length))
    }
    return palavra
}

// Popula a memória com objetos possuindo id e uma palavra
function atualizarPalavra(memoria, posicao, novoValor) {

    for (let index = 0; index < Object.keys(memoria).length; index++) {
        if (Object.keys(memoria)[index] == posicao ) {
            memoria[posicao] = novoValor
        }
    }
    return memoria
}

// Iniciar  primeiro cliclo de busca
function cicloDeBusca() {
    while (true) {
        console.log("Ciclo de Busca")
    }
}

// Iniciar  primeiro cliclo de busca
function cicloDeExecucao() {
    while (true) {
        console.log("Ciclo de Execução")
    }
}