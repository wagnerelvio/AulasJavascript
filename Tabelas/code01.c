#include <stdio.h>
#include <stdlib.h>

#define TAM 10

/* Estrutura de cada elemento */
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

/* Inserir elemento */
void inserir(int chave) {
    int indice = funcaoHash(chave);

    No *novo = (No*) malloc(sizeof(No));
    novo->chave = chave;
    novo->proximo = tabela[indice];

    tabela[indice] = novo;

    printf("Chave %d inserida no índice %d\n", chave, indice);
}

/* Buscar elemento */
void buscar(int chave) {
    int indice = funcaoHash(chave);

    No *atual = tabela[indice];

    while (atual != NULL) {
        if (atual->chave == chave) {
            printf("Chave %d encontrada no índice %d\n", chave, indice);
            return;
        }
        atual = atual->proximo;
    }

    printf("Chave %d não encontrada\n", chave);
}

/* Mostrar tabela */
void imprimir() {
    printf("\nTabela de Espalhamento:\n");

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

    inserir(15);
    inserir(25);
    inserir(35);
    inserir(7);
    inserir(18);

    imprimir();

    buscar(25);
    buscar(50);

    return 0;
}
