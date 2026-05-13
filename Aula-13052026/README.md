# Envio de Nome e Idade por E-mail com EmailJS

Este projeto apresenta um exemplo simples de formulário em HTML e JavaScript para coletar o **nome** e a **idade** de um usuário e enviar essas informações por e-mail usando o serviço **EmailJS**.

## Descrição

O código cria uma página HTML com um formulário contendo dois campos:

- Nome
- Idade

Ao clicar no botão **Enviar dados**, o JavaScript verifica se os campos foram preenchidos corretamente. Caso algum campo esteja vazio, uma mensagem de erro é exibida na própria página.

Se os dados estiverem corretos, eles são organizados em um objeto JavaScript e enviados por meio da função `emailjs.send()`.

## Necessidade de um serviço de e-mail

É importante destacar que o HTML e o JavaScript executados diretamente no navegador não enviam e-mails sozinhos de forma segura.

Por esse motivo, é necessário utilizar um serviço intermediário de envio de e-mail, como o **EmailJS**, ou então desenvolver uma aplicação com backend, usando tecnologias como Node.js, PHP, Python ou outra linguagem de servidor.

Neste exemplo, o serviço utilizado é o **EmailJS**, que permite enviar e-mails diretamente a partir de uma página web, sem a necessidade de criar um servidor próprio.

## Configuração do EmailJS

Para que o envio funcione corretamente, é necessário criar uma conta no site do EmailJS:

https://www.emailjs.com/

Depois disso, devem ser configurados:

1. Um serviço de e-mail;
2. Um modelo de mensagem;
3. A chave pública da conta.

No código, os seguintes valores precisam ser substituídos pelas informações reais da conta EmailJS:

```javascript
emailjs.init({
    publicKey: "SUA_PUBLIC_KEY"
});

emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", dadosEmail);
```

## Campos necessários

| Campo | Descrição |
|---|---|
| `SUA_PUBLIC_KEY` | Chave pública usada para identificar a conta no EmailJS |
| `SEU_SERVICE_ID` | Identificador do serviço de e-mail configurado |
| `SEU_TEMPLATE_ID` | Identificador do modelo de e-mail criado no EmailJS |

## Funcionamento geral

O funcionamento do código pode ser resumido da seguinte forma:

1. O usuário informa o nome e a idade no formulário;
2. O JavaScript impede o recarregamento automático da página;
3. Os dados digitados são validados;
4. Os dados são enviados ao EmailJS;
5. Uma mensagem de sucesso ou erro é exibida na tela;
6. Em caso de sucesso, os campos do formulário são limpos.

## Exemplo de dados enviados

```javascript
const dadosEmail = {
    nome_usuario: nome,
    idade_usuario: idade
};
```

Esses dados devem estar relacionados aos campos configurados no modelo de e-mail dentro do EmailJS.

## Observação

Este exemplo é adequado para fins didáticos e para pequenos formulários. Em aplicações maiores ou com maior exigência de segurança, pode ser mais adequado utilizar um backend próprio para controlar o envio das mensagens.
