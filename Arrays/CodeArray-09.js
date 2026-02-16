/* -----------------------------------------
   Exercício 9: map (Celsius -> Fahrenheit)
------------------------------------------ */
console.log("\n=== Exercicio 9 ===");
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9) / 5 + 32);

console.log("C:", celsius);
console.log("F:", fahrenheit);