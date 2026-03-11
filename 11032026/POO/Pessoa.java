class Pessoa {
  constructor(nome, idade, localTrabalho, cursoFaculdade, rendaMensal) {
    this.nome = nome;
    this.idade = idade;
    this.localTrabalho = localTrabalho;
    this.cursoFaculdade = cursoFaculdade;
    this.rendaMensal = rendaMensal;
  }

  apresentar() {
    console.log("Olá! Meu nome é " + this.nome + ".");
    console.log("Tenho " + this.idade + " anos.");
    console.log("Trabalho em: " + this.localTrabalho + ".");
    console.log("Faço o curso de: " + this.cursoFaculdade + ".");
    console.log("Minha renda mensal é R$ " + this.rendaMensal + ".");
  }

  trabalhar() {
    console.log(this.nome + " está trabalhando em " + this.localTrabalho + ".");
  }

  estudar() {
    console.log(this.nome + " está estudando " + this.cursoFaculdade + ".");
  }
}

// Criando um objeto da classe Pessoa
let pessoa1 = new Pessoa("Carlos", 22, "Empresa Tech", "Sistemas de Informação", 2500);

// Chamando os métodos
pessoa1.apresentar();
pessoa1.trabalhar();
pessoa1.estudar();
