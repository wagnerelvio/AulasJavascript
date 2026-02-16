/* -----------------------------------------
   Exercício 7: Buscar elemento (includes/indexOf)
------------------------------------------ */
console.log("\n=== Exercicio 7 ===");
const nomes = ["Ana", "Bruno", "Cris", "Jorge", "Diego"];

// Opção A: valor fixo (pra rodar direto)
const nomeBusca = "Cris";

// Opção B (navegador): const nomeBusca = prompt("Digite um nome:");
// Opção C (Node): usar readline (fica no final do arquivo um exemplo)

const existe = nomes.includes(nomeBusca);
console.log("Lista:", nomes);
console.log("Buscando:", nomeBusca);
console.log("Existe?", existe);

if (existe) {
  console.log("Indice:", nomes.indexOf(nomeBusca));
}