#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TAMANHO_TABELA 11

typedef struct No {
    char nome[50];
    struct No *proximo;
} No;

No *tabela[TAMANHO_TABELA];

// Função hash para nomes
int funcaoHash(char nome[]) {
    int soma = 0;

    for (int i = 0; nome[i] != '\0'; i++) {
        soma = soma + nome[i];
    }

    return soma % TAMANHO_TABELA;
}

// Inicializa a tabela com NULL
void inicializarTabela() {
    for (int i = 0; i < TAMANHO_TABELA; i++) {
        tabela[i] = NULL;
    }
}

// Insere um nome na tabela hash
void inserir(char nome[]) {
    int indice = funcaoHash(nome);

    No *novo = (No *) malloc(sizeof(No));

    strcpy(novo->nome, nome);
    novo->proximo = tabela[indice];

    tabela[indice] = novo;

    printf("Nome %s inserido no indice %d\n", nome, indice);
}

// Exibe a tabela hash
void exibirTabela() {
    printf("\nTabela Hash:\n\n");

    for (int i = 0; i < TAMANHO_TABELA; i++) {
        printf("Indice %d: ", i);

        No *atual = tabela[i];

        if (atual == NULL) {
            printf("vazio");
        } else {
            while (atual != NULL) {
                printf("%s", atual->nome);

                if (atual->proximo != NULL) {
                    printf(" -> ");
                }

                atual = atual->proximo;
            }
        }

        printf("\n");
    }
}

// Busca um nome na tabela hash
void buscar(char nome[]) {
    int indice = funcaoHash(nome);

    No *atual = tabela[indice];

    while (atual != NULL) {
        if (strcmp(atual->nome, nome) == 0) {
            printf("\nNome %s encontrado no indice %d\n", nome, indice);
            return;
        }

        atual = atual->proximo;
    }

    printf("\nNome %s nao encontrado na tabela\n", nome);
}

int main() {
    inicializarTabela();

    char nomes[20][50] = {
        "Ana",
        "Bruno",
        "Carlos",
        "Daniela",
        "Eduardo",
        "Fernanda",
        "Gabriel",
        "Helena",
        "Igor",
        "Juliana",
        "Lucas",
        "Mariana",
        "Nicolas",
        "Olivia",
        "Paulo",
        "Renata",
        "Samuel",
        "Tatiane",
        "Victor",
        "Wagner"
    };

    for (int i = 0; i < 20; i++) {
        inserir(nomes[i]);
    }

    exibirTabela();

    buscar("Mariana");
    buscar("Pedro");

    return 0;
}
