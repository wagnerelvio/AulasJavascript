/* -----------------------------------------
   Exercício 15: matriz 4x4 (maior de cada linha)
------------------------------------------ */
console.log("\n=== Exercicio 15 ===");
const mat15 = [
  [10, 2, 3, 40],
  [5, 60, 7, 8],
  [9, 10, 11, 12],
  [100, 20, 30, 4]
];

const maioresPorLinha = [];

for (const linha of mat15) {
  let max = linha[0];
  for (let j = 1; j < linha.length; j++) {
    if (linha[j] > max) max = linha[j];
  }
  maioresPorLinha.push(max);
}

console.log("Matriz:", mat15);
console.log("Maiores por linha:", maioresPorLinha);
