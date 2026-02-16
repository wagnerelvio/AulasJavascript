/* -----------------------------------------
   Exercício 17: fill (array 10 zeros, depois pos 3..6 com 7)
------------------------------------------ */
console.log("\n=== Exercicio 17 ===");
const ex17 = new Array(10).fill(0);
// posições 3 até 6 -> índices 3,4,5,6 (fim do fill é exclusivo, então 7)
ex17.fill(7, 3, 7);
console.log(ex17);