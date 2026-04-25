// Comparação simples entre Lista Ligada e Tabela Hash
// Medindo o tempo de busca de uma informação

// -----------------------------
// LISTA LIGADA
// -----------------------------

class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.inicio = null;
    }

    inserir(valor) {
        const novo = new No(valor);

        if (!this.inicio) {
            this.inicio = novo;
            return;
        }

        let atual = this.inicio;
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novo;
    }

    buscar(valor) {
        let atual = this.inicio;

        while (atual !== null) {
            if (atual.valor === valor) {
                return true;
            }
            atual = atual.proximo;
        }

        return false;
    }
}

// -----------------------------
// TABELA HASH
// -----------------------------

class TabelaHash {
    constructor(tamanho = 1000) {
        this.tabela = new Array(tamanho);
    }

    funcaoHash(chave) {
        return chave % this.tabela.length;
    }

    inserir(valor) {
        const indice = this.funcaoHash(valor);

        if (!this.tabela[indice]) {
            this.tabela[indice] = [];
        }

        this.tabela[indice].push(valor);
    }

    buscar(valor) {
        const indice = this.funcaoHash(valor);

        if (!this.tabela[indice]) {
            return false;
        }

        return this.tabela[indice].includes(valor);
    }
}

// -----------------------------
// TESTE DE DESEMPENHO
// -----------------------------

const quantidade = 100000;
const valorBusca = 99999;

const lista = new ListaLigada();
const hash = new TabelaHash();

// Inserindo valores
for (let i = 0; i < quantidade; i++) {
    lista.inserir(i);
    hash.inserir(i);
}

// -----------------------------
// MEDINDO TEMPO - LISTA LIGADA
// -----------------------------

console.time("Busca na Lista Ligada");
lista.buscar(valorBusca);
console.timeEnd("Busca na Lista Ligada");

// -----------------------------
// MEDINDO TEMPO - TABELA HASH
// -----------------------------

console.time("Busca na Tabela Hash");
hash.buscar(valorBusca);
console.timeEnd("Busca na Tabela Hash");
