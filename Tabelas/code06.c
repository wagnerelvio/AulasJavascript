#include <stdio.h>
#include <stdlib.h>

#define TAM 10

/* Estrutura do nó */
typedef struct No {
    int chave;
    struct No *prox;
} No;

/* Tabela Hash */
No* tabela[TAM];

/* Inicializa a tabela com NULL */
void inicializarTabela() {
    for (int i = 0; i < TAM; i++) {
        tabela[i] = NULL;
    }
}

/* Função para mostrar a tabela */
void imprimirTabela() {
    printf("\n--- TABELA HASH ---\n");

    for (int i = 0; i < TAM; i++) {
        printf("[%d] -> ", i);

        No *atual = tabela[i];

        while (atual != NULL) {
            printf("%d -> ", atual->chave);
            atual = atual->prox;
        }

        printf("NULL\n");
    }
}

/* Função Hash */
int funcaoHash(int chave) {
    return chave % TAM;
}

/* Inserção com encadeamento */
void inserir(int chave) {
    int indice = funcaoHash(chave);

    No *novo = (No*) malloc(sizeof(No));
    novo->chave = chave;
    novo->prox = NULL;

    /* Inserção no início da lista */
    novo->prox = tabela[indice];
    tabela[indice] = novo;

    printf("Chave %d inserida no índice %d\n", chave, indice);
}

/* Programa principal */
int main() {

    /* Passo 1: Inicializa */
    inicializarTabela();

    /* Passo 2: Mostra tabela vazia */
    printf("Tabela antes da inserção:\n");
    imprimirTabela();

    /* Passo 3: Inserções */
    inserir(15);
    inserir(25);
    inserir(35);
    inserir(42);
    inserir(28);

    /* Passo 4: Mostra tabela final */
    printf("\nTabela após a inserção:\n");
    imprimirTabela();

    return 0;
}
