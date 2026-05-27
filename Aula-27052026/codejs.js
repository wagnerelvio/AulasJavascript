// Lê os dados vindos do HTTP Request
const dados = $json;

// Tempo máximo permitido sem nova leitura, em minutos
const limiteMinutosSemAtualizacao = 2;

// Converte os campos para número
const sensor1 = Number(dados.field1);
const sensor2 = Number(dados.field2);
const sensor3 = Number(dados.field3);
const sensor4 = Number(dados.field4);

// Listas de controle
const sensoresValidos = [];
const sensoresComFalha = [];

// Verifica se a leitura do ThingSpeak está atualizada
let leituraAntiga = false;
let minutosDesdeUltimaLeitura = null;

if (dados.created_at) {
  const horarioColeta = new Date(dados.created_at);
  const agora = new Date();

  const diferencaMs = agora - horarioColeta;
  minutosDesdeUltimaLeitura = diferencaMs / 1000 / 60;

  if (minutosDesdeUltimaLeitura > limiteMinutosSemAtualizacao) {
    leituraAntiga = true;
  }
} else {
  leituraAntiga = true;
}

// Função para verificar se o valor do sensor é válido
function verificarSensor(nome, valor, campoOriginal) {
  if (
    campoOriginal === null ||
    campoOriginal === undefined ||
    String(campoOriginal).trim() === "" ||
    isNaN(valor)
  ) {
    sensoresComFalha.push(nome);
  } else {
    sensoresValidos.push(valor);
  }
}

// Verificação dos quatro sensores
verificarSensor("Sensor 1", sensor1, dados.field1);
verificarSensor("Sensor 2", sensor2, dados.field2);
verificarSensor("Sensor 3", sensor3, dados.field3);
verificarSensor("Sensor 4", sensor4, dados.field4);

// Calcula a média apenas com sensores válidos
let media = null;

if (sensoresValidos.length > 0) {
  const soma = sensoresValidos.reduce((total, valor) => total + valor, 0);
  media = soma / sensoresValidos.length;
}

// Define o status do ambiente
let status = "Sem dados válidos";

if (leituraAntiga) {
  status = "Falha de comunicação";
} else if (media !== null) {
  if (media <= 25) {
    status = "Normal";
  } else if (media > 25 && media <= 30) {
    status = "Atenção";
  } else {
    status = "Crítico";
  }
}

// Formata a data e hora da coleta
let horarioFormatado = "Horário não disponível";

if (dados.created_at) {
  horarioFormatado = new Date(dados.created_at).toLocaleString("pt-BR", {
    timeZone: "America/Fortaleza"
  });
}

// Monta a mensagem de falhas
let mensagemFalha = "Nenhuma falha detectada";

if (sensoresComFalha.length > 0) {
  mensagemFalha = sensoresComFalha.join(", ");
}

if (leituraAntiga) {
  mensagemFalha = "Sem atualização recente dos sensores";
}

// Retorna os dados tratados para o próximo nó
return [
  {
    json: {
      sensor1: isNaN(sensor1) ? "Falha" : sensor1,
      sensor2: isNaN(sensor2) ? "Falha" : sensor2,
      sensor3: isNaN(sensor3) ? "Falha" : sensor3,
      sensor4: isNaN(sensor4) ? "Falha" : sensor4,
      media: media !== null ? media.toFixed(2) : "Sem média",
      status: status,
      horario: horarioFormatado,
      falhas: mensagemFalha,
      leituraAntiga: leituraAntiga,
      minutosSemAtualizacao: minutosDesdeUltimaLeitura !== null
        ? minutosDesdeUltimaLeitura.toFixed(1)
        : "Indisponível"
    }
  }
];
