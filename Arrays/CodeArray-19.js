/* -----------------------------------------
   Exercício 19: entries / keys / values
------------------------------------------ */
console.log("\n=== Exercicio 19 ===");
const ex19 = ["JS", "Node", "HTML"];

console.log("keys:");
for (const k of ex19.keys()) console.log(k);

console.log("values:");
for (const v of ex19.values()) console.log(v);

console.log("entries:");
for (const [i, v] of ex19.entries()) console.log(i, "->", v);
