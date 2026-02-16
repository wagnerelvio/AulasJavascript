/* -----------------------------------------
   Exercício 16: Array.from (1 a 20)
------------------------------------------ */
console.log("\n=== Exercicio 16 ===");
const ex16 = Array.from({ length: 20 }, (_, i) => i + 1);
console.log(ex16);