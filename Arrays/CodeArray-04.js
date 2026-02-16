/* -----------------------------------------
   Exercício 4: Contar pares e ímpares
------------------------------------------ */
console.log("\n=== Exercicio 4 ===");
const ex4 = Array.from({ length: 20 }, (_, i) => i + 1); // 1..20
let pares = 0;
let impares = 0;

for (const n of ex4) {
  if (n % 2 === 0) pares++;
  else impares++;
}
console.log("Array:", ex4);
console.log("Pares:", pares);
console.log("Impares:", impares);