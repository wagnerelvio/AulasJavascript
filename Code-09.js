// Array: maior, soma, quantidade de pares
const v = [12, 5, 8, 21, 6, 10, 3, 14];

let maior = v[0];
let somaV = 0;
let pares = 0;

for (let i = 0; i < v.length; i++) {
  const val = v[i];
  somaV += val;
  if (val > maior) maior = val;
  if (val % 2 === 0) pares++;
}

console.log("Vetor:", v);
console.log("Maior:", maior);
console.log("Soma:", somaV);
console.log("Qtd pares:", pares);
