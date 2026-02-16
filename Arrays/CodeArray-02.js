/* -----------------------------------------
   Exercício 2: Somar (for e reduce)
------------------------------------------ */
console.log("\n=== Exercicio 2 ===");
const ex2 = [10, 20, 30, 40];

let somaFor = 0;
for (let i = 0; i < ex2.length; i++) {
  somaFor += ex2[i];
}
console.log("Soma (for):", somaFor);

const somaReduce = ex2.reduce((acc, x) => acc + x, 0);
console.log("Soma (reduce):", somaReduce);