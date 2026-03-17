// Classe que representa um nó da lista
class No {
  constructor(produto) {
    // Armazena o objeto produto dentro do nó
    this.produto = produto;

    // Ponteiro para o próximo nó da lista
    this.proximo = null;
  }
}

// Classe que representa a lista ligada simples
class ListaProdutos {
  constructor() {
    // Início da lista começa vazio
    this.inicio = null;
  }

  // Método para inserir um produto no final da lista
  inserir(produto) {
    // Cria um novo nó com o produto recebido
    let novoNo = new No(produto);

    // Se a lista estiver vazia, o novo nó será o primeiro
    if (this.inicio === null) {
      this.inicio = novoNo;
    } else {
      // Começa pelo primeiro nó
      let atual = this.inicio;

      // Percorre até o último nó
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }

      // Faz o último nó apontar para o novo nó
      atual.proximo = novoNo;
    }
  }

  // Método para mostrar todos os produtos da lista
  mostrar() {
    // Começa no início da lista
    let atual = this.inicio;

    // Verifica se a lista está vazia
    if (atual === null) {
      console.log("A lista está vazia.");
      return;
    }

    console.log("Lista de produtos:");

    // Percorre a lista até o final
    while (atual !== null) {
      console.log(
        "Produto: " + atual.produto.nome +
        " | Preço: R$ " + atual.produto.preco +
        " | Quantidade: " + atual.produto.quantidade
      );

      // Avança para o próximo nó
      atual = atual.proximo;
    }
  }

  // Método para buscar um produto pelo nome
  buscarPorNome(nome) {
    // Começa pelo início da lista
    let atual = this.inicio;

    // Percorre todos os nós
    while (atual !== null) {
      // Compara o nome digitado com o nome do produto
      if (atual.produto.nome.toLowerCase() === nome.toLowerCase()) {
        console.log("Produto encontrado:");
        console.log(
          "Produto: " + atual.produto.nome +
          " | Preço: R$ " + atual.produto.preco +
          " | Quantidade: " + atual.produto.quantidade
        );
        return atual.produto;
      }

      // Vai para o próximo nó
      atual = atual.proximo;
    }

    // Caso não encontre
    console.log("Produto não encontrado.");
    return null;
  }

  // Método para remover um produto pelo nome
  remover(nome) {
    // Se a lista estiver vazia, não há o que remover
    if (this.inicio === null) {
      console.log("A lista está vazia. Nada para remover.");
      return;
    }

    // Caso especial: o produto a remover está no primeiro nó
    if (this.inicio.produto.nome.toLowerCase() === nome.toLowerCase()) {
      this.inicio = this.inicio.proximo;
      console.log("Produto removido com sucesso.");
      return;
    }

    // Ponteiro para percorrer a lista
    let atual = this.inicio;

    // Percorre enquanto existir próximo nó
    while (atual.proximo !== null) {
      // Verifica se o próximo nó contém o produto a remover
      if (atual.proximo.produto.nome.toLowerCase() === nome.toLowerCase()) {
        // Faz o nó atual pular o nó removido
        atual.proximo = atual.proximo.proximo;
        console.log("Produto removido com sucesso.");
        return;
      }

      // Avança para o próximo nó
      atual = atual.proximo;
    }

    // Caso o produto não seja encontrado
    console.log("Produto não encontrado. Nada foi removido.");
  }
}

// --------------------------
// TESTANDO A LISTA
// --------------------------

// Cria a lista
let lista = new ListaProdutos();

// Insere produtos de informática
lista.inserir({ nome: "Mouse", preco: 50, quantidade: 10 });
lista.inserir({ nome: "Teclado", preco: 120, quantidade: 5 });
lista.inserir({ nome: "Monitor", preco: 900, quantidade: 3 });
lista.inserir({ nome: "Notebook", preco: 3500, quantidade: 2 });

// Mostra todos os produtos
lista.mostrar();

console.log("");

// Busca um produto pelo nome
lista.buscarPorNome("Monitor");

console.log("");

// Remove um produto
lista.remover("Teclado");
lista.remover("Notebook");

console.log(" ---  ");
let agora = new Date();
let agora2 = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })

console.log(agora);
console.log(agora2);
console.log(" ---  ");

// Mostra novamente a lista após a remoção
lista.mostrar();
