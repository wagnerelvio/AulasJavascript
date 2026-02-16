/* -----------------------------------------
   Exercício 14: matriz 3x3 (diagonal principal e secundária)
------------------------------------------ */
console.log("\n=== Exercicio 14 ===");
const mat14 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let diagPrincipal = 0;
let diagSecundaria = 0;
const n14 = mat14.length;

for (let i = 0; i < n14; i++) {
  diagPrincipal += mat14[i][i];
  diagSecundaria += mat14[i][n14 - 1 - i];
}

console.log("Matriz:", mat14);
console.log("Soma diag principal:", diagPrincipal);   // 1+5+9=15
console.log("Soma diag secundaria:", diagSecundaria); // 3+5+7=15