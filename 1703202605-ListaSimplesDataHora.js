class No {
  constructor(produto) {
    this.produto = produto;
    this.proximo = null;
  }
}

class ListaProdutos {
  constructor() {
    this.inicio = null;
  }

  // Retorna data e hora formatadas no fuso UTC-3
  obterDataHora() {
    return new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo"
    });
  }

  inserir(produto) {
    let novoNo = new No(produto);

    if (this.inicio === null) {
      this.inicio = novoNo;
    } else {
      let atual = this.inicio;

      while (atual.proximo !== null) {
        atual = atual.proximo;
      }

      atual.proximo = novoNo;
    }

    console.log("[" + this.obterDataHora() + "] Produto inserido: " + produto.nome);
  }

  mostrar() {
    let atual = this.inicio;

    if (atual === null) {
      console.log("[" + this.obterDataHora() + "] A lista está vazia.");
      return;
    }

    console.log("[" + this.obterDataHora() + "] Lista de produtos:");

    while (atual !== null) {
      console.log(
        "Produto: " + atual.produto.nome +
        " | Preço: R$ " + atual.produto.preco +
        " | Quantidade: " + atual.produto.quantidade
      );
      atual = atual.proximo;
    }
  }

  buscarPorNome(nome) {
    let atual = this.inicio;

    while (atual !== null) {
      if (atual.produto.nome.toLowerCase() === nome.toLowerCase()) {
        console.log("[" + this.obterDataHora() + "] Produto encontrado:");
        console.log(
          "Produto: " + atual.produto.nome +
          " | Preço: R$ " + atual.produto.preco +
          " | Quantidade: " + atual.produto.quantidade
        );
        return atual.produto;
      }

      atual = atual.proximo;
    }

    console.log("[" + this.obterDataHora() + "] Produto não encontrado.");
    return null;
  }

  remover(nome) {
    if (this.inicio === null) {
      console.log("[" + this.obterDataHora() + "] A lista está vazia. Nada para remover.");
      return;
    }

    if (this.inicio.produto.nome.toLowerCase() === nome.toLowerCase()) {
      this.inicio = this.inicio.proximo;
      console.log("[" + this.obterDataHora() + "] Produto removido: " + nome);
      return;
    }

    let atual = this.inicio;

    while (atual.proximo !== null) {
      if (atual.proximo.produto.nome.toLowerCase() === nome.toLowerCase()) {
        atual.proximo = atual.proximo.proximo;
        console.log("[" + this.obterDataHora() + "] Produto removido: " + nome);
        return;
      }

      atual = atual.proximo;
    }

    console.log("[" + this.obterDataHora() + "] Produto não encontrado. Nada foi removido.");
  }
}

// --------------------------
// TESTANDO A LISTA
// --------------------------

let lista = new ListaProdutos();

lista.inserir({ nome: "Mouse", preco: 50, quantidade: 10 });
lista.inserir({ nome: "Teclado", preco: 120, quantidade: 5 });
lista.inserir({ nome: "Monitor", preco: 900, quantidade: 3 });
lista.inserir({ nome: "Notebook", preco: 3500, quantidade: 2 });

console.log("");

lista.mostrar();

console.log("");

lista.buscarPorNome("Monitor");

console.log("");

lista.remover("Teclado");

console.log("");

lista.mostrar();
