/* -----------------------------------------
   Exercício 6: Remover duplicados
------------------------------------------ */
console.log("\n=== Exercicio 6 ===");
const ex6 = [1, 2, 2, 3, 3, 3, 4, 1, 5, 5];
const semDuplicados = [];

for (const x of ex6) {
  if (!semDuplicados.includes(x)) semDuplicados.push(x);
}
console.log("Original:", ex6);
console.log("Sem duplicados:", semDuplicados);
