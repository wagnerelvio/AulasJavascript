//
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
    this.anterior = null;
  }
}

class ListaDuplamenteLigada {
  constructor() {
    this.inicio = null;
    this.fim = null;
  }

  inserir(valor) {
    let novoNo = new No(valor);

    if (this.inicio === null) {
      this.inicio = novoNo;
      this.fim = novoNo;
    } else {
      novoNo.anterior = this.fim;
      this.fim.proximo = novoNo;
      this.fim = novoNo;
    }
  }

  mostrarInicioFim() {
    let atual = this.inicio;

    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }

  mostrarFimInicio() {
    let atual = this.fim;

    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.anterior;
    }
  }
}

// Criando a lista
let lista = new ListaDuplamenteLigada();

lista.inserir(10);
lista.inserir(20);
lista.inserir(30);

console.log("Do início para o fim:");
lista.mostrarInicioFim();

console.log("Do fim para o início:");
lista.mostrarFimInicio();
