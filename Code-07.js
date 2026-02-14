// Operador lógico -- Acesso permitido com &&
const usuarioLogado = true;
const perfilAdmin = false;

if (usuarioLogado && perfilAdmin) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}
