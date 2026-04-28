#include <stdio.h>
#include <stdlib.h>

#define TAM 10

/* Estrutura do nó da lista ligada */
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

/* Função Hash */
int funcaoHash(int chave) {
    return chave % TAM;
}

/* Inserção com tratamento de colisão por encadeamento */
void inserir(int chave) {
    int indice = funcaoHash(chave);

    /* Cria novo nó */
    No *novo = (No*) malloc(sizeof(No));
    novo->chave = chave;
    novo->prox = NULL;

    /* Se a posição estiver vazia */
    if (tabela[indice] == NULL) {
        tabela[indice] = novo;
    } 
    else {
        /* Inserção no início da lista */
        novo->prox = tabela[indice];
        tabela[indice] = novo;
    }

    printf("Chave %d inserida no indice %d\n", chave, indice);
}

/* Exibe a tabela hash */
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

/* Programa principal */
int main() {
    inicializarTabela();

    inserir(15);
    inserir(25);
    inserir(35);
    inserir(42);
    inserir(28);
    inserir(37);

    imprimirTabela();

    return 0;
}
