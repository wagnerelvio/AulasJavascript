const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarTemperatura(t) {
  if (!Number.isFinite(t)) return "Valor inválido!";

  if (t < 40) return "Severidade: RISCO MUITO BAIXO";
  if (t < 60) return "Severidade: RISCO BAIXO";
  if (t < 80) return "Severidade: *** ALERTA ***";
  if (t < 120) return "Severidade: RISCO MÉDIO";
  if (t < 170) return "Severidade: RISCO MODERADO – ALERTA AMARELO";
  if (t < 200) return "Severidade: RISCO ALTO – ALERTA LARANJA";
  return "Severidade: RISCO MUITO ALTO – ALERTA VERMELHO";
}

rl.question("Digite a temperatura: ", (entrada) => {
  const t = Number(entrada);
  console.log(classificarTemperatura(t));
  rl.close();
});
