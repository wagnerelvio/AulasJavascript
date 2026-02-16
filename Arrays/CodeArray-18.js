/* -----------------------------------------
   Exercício 18: copyWithin (dois últimos para o início)
------------------------------------------ */
console.log("\n=== Exercicio 18 ===");
const ex18 = [1, 2, 3, 4, 5, 6];
// copiar os dois últimos (índice 4 e 5) para o início (índice 0)
ex18.copyWithin(0, ex18.length - 2);
console.log(ex18); // [5,6,3,4,5,6]