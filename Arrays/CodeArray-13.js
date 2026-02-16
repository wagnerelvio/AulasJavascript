/* -----------------------------------------
   Exercício 13: ordenar objetos (nota desc, nome asc em empate)
------------------------------------------ */
console.log("\n=== Exercicio 13 ===");
const alunos13 = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carla", nota: 9.2 },
  { nome: "Alex", nota: 9.2 }
];

alunos13.sort((a, b) => {
  if (b.nota !== a.nota) return b.nota - a.nota; // nota desc
  return a.nome.localeCompare(b.nome, "pt-BR");  // nome asc
});

console.log("Ordenado:", alunos13);