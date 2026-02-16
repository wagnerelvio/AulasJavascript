/* --------------------------------------------------------
   Exercício 3: Maior e menor (sem Math.max/min com spread)
--------------------------------------------------------- */
console.log("\n=== Exercicio 3 ===");
const ex3 = [15, 200, 99, -5, 30, 8];

let maior = ex3[0];
let menor = ex3[0];

for (let i = 1; i < ex3.length; i++) {
  if (ex3[i] > maior) maior = ex3[i];
  if (ex3[i] < menor) menor = ex3[i];
}
console.log("Maior:", maior);
console.log("Menor:", menor);