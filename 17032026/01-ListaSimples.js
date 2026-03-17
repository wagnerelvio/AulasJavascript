//
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
    let novoNo = new No(valor);

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
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }
}

// Criando a lista
let lista = new ListaLigada();

lista.inserir(10);
lista.inserir(20);
lista.inserir(30);

// Mostrando os elementos
lista.mostrar();
