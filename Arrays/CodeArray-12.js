/* -----------------------------------------
   Exercício 12: ordenação numérica correta
------------------------------------------ */
console.log("\n=== Exercicio 12 ===");
const nums12 = [10, 2, 30, 4, 25];

const crescente = [...nums12].sort((a, b) => a - b);
const decrescente = [...nums12].sort((a, b) => b - a);

console.log("Original:", nums12);
console.log("Crescente:", crescente);
console.log("Decrescente:", decrescente);

// Demonstração da "pegadinha" do sort sem comparador:
console.log("sort() sem comparador:", [...nums12].sort()); // ordena como string