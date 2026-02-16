/* -----------------------------------------
   Exercício 8: splice (inserir/remover/substituir)
------------------------------------------ */
console.log("\n=== Exercicio 8 ===");
const ex8 = [10, 20, 30, 40, 50];

// inserir 25 na posição 2
ex8.splice(2, 0, 25);
// remover elemento da posição 4
ex8.splice(4, 1);
// substituir posição 0 por 99
ex8.splice(0, 1, 99);

console.log("Resultado:", ex8);