function usarMetodosDOM() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Título alterado com getElementById()";
  titulo.style.color = "red";

  let paragrafos = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.fontWeight = "bold";
  }

  let caixas = document.getElementsByClassName("caixa");
  for (let i = 0; i < caixas.length; i++) {
    caixas[i].style.backgroundColor = "lightgray";
  }

  let itens = document.querySelectorAll(".menu li");
  itens.forEach(function(item) {
    item.style.color = "green";
  });
}
