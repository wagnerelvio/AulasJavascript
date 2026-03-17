//
// Classe que representa um nó da lista
class NoProduto {
  constructor(id, nome, quantidade, preco) {
    this.id = id;                 // Identificador do produto
    this.nome = nome;             // Nome do produto
    this.quantidade = quantidade; // Quantidade em estoque
    this.preco = preco;           // Preço do produto
    this.next = null;             // Ponteiro para o próximo nó
  }
}

// Classe que representa a lista ligada de produtos
class ListaLigadaProdutos {
  constructor() {
    this.head = null; // Primeiro nó da lista
    this.tail = null; // Último nó da lista
  }

  // Método para inserir um novo produto no final da lista
  inserirNoFim(id, nome, quantidade, preco) {
    // Cria um novo nó com os dados recebidos
    const novoNo = new NoProduto(id, nome, quantidade, preco);

    // Verifica se a lista está vazia
    if (this.head === null) {
      // Se estiver vazia, o novo nó será o primeiro e o último
      this.head = novoNo;
      this.tail = novoNo;
    } else {
      // Se já existir elemento, o último nó aponta para o novo nó
      this.tail.next = novoNo;

      // Atualiza o tail para o novo último nó
      this.tail = novoNo;
    }
  }

  // Método para percorrer e imprimir todos os elementos da lista
  imprimirLista() {
    // Começa a partir do primeiro nó
    let atual = this.head;

    console.log("===== LISTA LIGADA DE PRODUTOS =====");

    // Enquanto existir nó na lista
    while (atual !== null) {
      console.log(
        "ID: " + atual.id +
        " | Produto: " + atual.nome +
        " | Qde: " + atual.quantidade +
        " | Preço: R$ " + atual.preco.toFixed(2)
      );

      // Avança para o próximo nó
      atual = atual.next;
    }

    console.log("====================================");
  }

  // Método para mostrar o primeiro e o último elemento da lista
  mostrarHeadETail() {
    // Verifica se existe primeiro nó
    if (this.head !== null) {
      console.log("HEAD -> " + this.head.nome);
    } else {
      console.log("HEAD -> null");
    }

    // Verifica se existe último nó
    if (this.tail !== null) {
      console.log("TAIL -> " + this.tail.nome);
    } else {
      console.log("TAIL -> null");
    }
  }
}

// Cria uma nova lista ligada de produtos
const listaProdutos = new ListaLigadaProdutos();

// Insere os produtos da figura na lista
listaProdutos.inserirNoFim(1, "TV60", 10, 4000.00);
listaProdutos.inserirNoFim(2, "Smartphone-01", 20, 2000.00);
listaProdutos.inserirNoFim(3, "Smartphone-02", 20, 4000.00);
listaProdutos.inserirNoFim(4, "NoteBookCorei5", 10, 8000.00);
listaProdutos.inserirNoFim(5, "NoteBookCorei7", 5, 12000.00);

// Imprime todos os produtos da lista
listaProdutos.imprimirLista();

// Mostra quem é o primeiro nó e quem é o último
listaProdutos.mostrarHeadETail();
