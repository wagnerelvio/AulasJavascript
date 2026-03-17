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
  }

  mostrar() {
    let atual = this.inicio;

    while (atual !== null) {
      console.log(
        "Produto: " + atual.produto.nome +
        " | Preço: R$ " + atual.produto.preco +
        " | Quantidade: " + atual.produto.quantidade
      );
      atual = atual.proximo;
    }
  }
}

// Criando a lista de produtos
let lista = new ListaProdutos();

lista.inserir({ nome: "Mouse", preco: 50, quantidade: 10 });
lista.inserir({ nome: "Teclado", preco: 120, quantidade: 5 });
lista.inserir({ nome: "Monitor", preco: 900, quantidade: 3 });
lista.inserir({ nome: "Notebook", preco: 3500, quantidade: 2 });

// Exibindo a lista
lista.mostrar();
