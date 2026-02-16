/* -----------------------------------------
   Exercício 5: Inverter (sem reverse)
------------------------------------------ */
console.log("\n=== Exercicio 5 ===");
const ex5 = [1, 2, 3, 4, 5];
const invertido = [];

for (let i = ex5.length - 1; i >= 0; i--) {
  invertido.push(ex5[i]);
}
console.log("Original:", ex5);
console.log("Invertido:", invertido);