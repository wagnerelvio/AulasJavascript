/* -----------------------------------------
   Exercício 11: some e every (notas)
------------------------------------------ */
console.log("\n=== Exercicio 11 ===");
const notas = [7.5, 8, 9, 4.5, 6];

const algumaAbaixo5 = notas.some(n => n < 5);
const todasMaiorIgual7 = notas.every(n => n >= 7);

console.log("Notas:", notas);
console.log("Alguma abaixo de 5?", algumaAbaixo5);
console.log("Todas >= 7?", todasMaiorIgual7);