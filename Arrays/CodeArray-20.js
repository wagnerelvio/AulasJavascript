/* -----------------------------------------
   Exercício 20: Mini-desafio (carrinho)
------------------------------------------ */
console.log("\n=== Exercicio 20 ===");
const carrinho = [
  { produto: "Teclado", preco: 120, qtd: 2 },
  { produto: "Mouse", preco: 60, qtd: 1 },
  { produto: "Pendrive", preco: 45, qtd: 3 }
];

function totalCarrinho(itens) {
  return itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);
}

function itensQtdMinima(itens, minQtd) {
  return itens.filter(item => item.qtd >= minQtd);
}

function aplicarDesconto(itens, percentual) {
  const fator = 1 - percentual / 100;
  return itens.map(item => ({
    ...item,
    preco: Number((item.preco * fator).toFixed(2))
  }));
}

console.log("Carrinho:", carrinho);
console.log("Total:", totalCarrinho(carrinho));
console.log("Itens qtd >= 2:", itensQtdMinima(carrinho, 2));
console.log("Com 10% desconto:", aplicarDesconto(carrinho, 10));