/* -----------------------------------------
   Exercício 10: filter (idades >= 18)
------------------------------------------ */
console.log("\n=== Exercicio 10 ===");
const idades = [12, 17, 18, 25, 16, 40, 19];
const maiores = idades.filter(i => i >= 18);

console.log("Idades:", idades);
console.log("Maiores:", maiores);