#include <stdio.h>
#include <stdlib.h>

#define TAM 5

/* Estrutura do nó para Lista Ligada */
typedef struct No {
    int chave;
    struct No *proximo;
} No;

/* Tabela Hash */
No* tabela[TAM];

/* Inicializa a tabela */
void inicializar() {
    for (int i = 0; i < TAM; i++) {
        tabela[i] = NULL;
    }
}

/* Função Hash */
int funcaoHash(int chave) {
    return chave % TAM;
}

/* Inserção com tratamento de colisão */
void inserir(int chave) {
    int indice = funcaoHash(chave);

    /* Verifica se já existe algo no índice */
    if (tabela[indice] != NULL) {
        printf("Colisão detectada para a chave %d no índice %d!\n", chave, indice);
    }

    No *novo = (No*) malloc(sizeof(No));
    novo->chave = chave;
    novo->proximo = tabela[indice];

    tabela[indice] = novo;

    printf("Chave %d inserida no índice %d\n", chave, indice);
}

/* Mostrar tabela */
void imprimir() {
    printf("\nTabela Hash com Colisões:\n");

    for (int i = 0; i < TAM; i++) {
        printf("[%d] -> ", i);

        No *atual = tabela[i];

        while (atual != NULL) {
            printf("%d -> ", atual->chave);
            atual = atual->proximo;
        }

        printf("NULL\n");
    }
}

/* Programa principal */
int main() {
    inicializar();

    /* Esses valores irão gerar colisões */
    inserir(10);  /* 10 % 5 = 0 */
    inserir(15);  /* 15 % 5 = 0 -> colisão */
    inserir(20);  /* 20 % 5 = 0 -> colisão */
    inserir(7);   /* 7 % 5 = 2 */
    inserir(12);  /* 12 % 5 = 2 -> colisão */

    imprimir();

    return 0;
}
