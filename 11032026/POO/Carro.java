class Carro {
  constructor(tipo, modelo, ano, portas, combustivel, eletrico) {
    this.tipo = tipo;               // ex: sedan, SUV, hatch
    this.modelo = modelo;           // ex: Corolla
    this.ano = ano;                 // ex: 2022
    this.portas = portas;           // ex: 4
    this.combustivel = combustivel; // ex: gasolina, flex, diesel
    this.eletrico = eletrico;       // true ou false

    this.velocidade = 0;
    this.ligado = false;
    this.nivelCombustivel = 100;
    this.vendido = false;
  }

  ligar() {
    if (!this.vendido) {
      this.ligado = true;
      console.log(`${this.modelo} foi ligado.`);
    } else {
      console.log(`Este carro já foi vendido.`);
    }
  }

  acelerar() {
    if (this.vendido) {
      console.log(`Este carro já foi vendido.`);
    } else if (!this.ligado) {
      console.log(`O carro precisa estar ligado para acelerar.`);
    } else if (this.nivelCombustivel <= 0 && !this.eletrico) {
      console.log(`O carro está sem combustível.`);
    } else {
      this.velocidade += 10;
      if (!this.eletrico) {
        this.nivelCombustivel -= 2;
      }
      console.log(`${this.modelo} acelerou. Velocidade atual: ${this.velocidade} km/h.`);
    }
  }

  frear() {
    if (this.velocidade > 0) {
      this.velocidade -= 10;
      if (this.velocidade < 0) {
        this.velocidade = 0;
      }
      console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidade} km/h.`);
    } else {
      console.log(`${this.modelo} já está parado.`);
    }
  }

  parar() {
    this.velocidade = 0;
    console.log(`${this.modelo} parou totalmente.`);
  }

  abastecer(quantidade) {
    if (this.eletrico) {
      console.log(`Carro elétrico não usa combustível comum.`);
    } else {
      this.nivelCombustivel += quantidade;
      if (this.nivelCombustivel > 100) {
        this.nivelCombustivel = 100;
      }
      console.log(`${this.modelo} foi abastecido. Nível de combustível: ${this.nivelCombustivel}%.`);
    }
  }

  vender() {
    this.vendido = true;
    this.ligado = false;
    this.velocidade = 0;
    console.log(`${this.modelo} foi vendido.`);
  }

  exibirDados() {
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Portas: ${this.portas}`);
    console.log(`Combustível: ${this.combustivel}`);
    console.log(`Elétrico: ${this.eletrico ? "Sim" : "Não"}`);
    console.log(`Velocidade: ${this.velocidade} km/h`);
    console.log(`Nível de combustível: ${this.nivelCombustivel}%`);
    console.log(`Vendido: ${this.vendido ? "Sim" : "Não"}`);
  }
}


let carro1 = new Carro("SUV", "Compass", 2023, 4, "flex", false);

carro1.exibirDados();
carro1.ligar();
carro1.acelerar();
carro1.acelerar();
carro1.frear();
carro1.abastecer(10);
carro1.parar();
carro1.vender();
carro1.acelerar();
