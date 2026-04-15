# Teste de AJAX com JSONPlaceholder

O **JSONPlaceholder** é uma API pública muito útil para testes, porque simula um banco de dados real com recursos como **posts**, **comentários**, **usuários** e **tarefas**.

Neste exemplo, foi criado um pequeno **Gerenciador de Tarefas (Todo List)** usando **HTML, CSS e JavaScript com Fetch API**. A proposta é demonstrar duas operações comuns no consumo de APIs:

- **GET**: buscar tarefas do servidor
- **POST**: simular o envio de uma nova tarefa


**GET** e **POST** são métodos do protocolo **HTTP** fundamentais para troca de dados entre cliente (navegador) e servidor. O GET recupera dados, exibindo parâmetros na URL, sendo ideal para buscas e links, mas limitado em tamanho. O POST envia dados no corpo da requisição (invisível na URL), seguro para dados sensíveis, sem limites de tamanho, usado para cadastros e uploads

O protocolo  **HTTP** (Hypertext Transfer Protocol) é o protocolo base para troca de dados na World Wide Web, permitindo que navegadores (clientes) solicitem e recebam recursos como HTML de servidores. 

---

## O que este exemplo faz

A aplicação realiza duas ações principais:

1. Busca as 5 primeiras tarefas da API e mostra na tela.
2. Permite digitar uma nova tarefa e enviá-la para a API com `POST`.

Mesmo sendo uma simulação, esse fluxo é muito próximo do que acontece em aplicações reais.
