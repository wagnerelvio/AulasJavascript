#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define TAM 10000
#define HASH_SIZE 1000

/* =========================
   ESTRUTURA DA LISTA LIGADA
   ========================= */

typedef struct No {
    int valor;
    struct No *proximo;
} No;

/* =========================
   TABELA HASH
   ========================= */

No* tabelaHash[HASH_SIZE];

/* Função Hash */
int funcaoHash(int chave) {
    return chave % HASH_SIZE;
}

/* Inserção na Tabela Hash */
void inserirHash(int valor) {
    int indice = funcaoHash(valor);

    No *novo = (No*) malloc(sizeof(No));
    novo->valor = valor;
    novo->proximo = tabelaHash[indice];

    tabelaHash[indice] = novo;
}

/* Busca na Tabela Hash */
int buscarHash(int valor) {
    int indice = funcaoHash(valor);
    No *atual = tabelaHash[indice];

    while (atual != NULL) {
        if (atual->valor == valor) {
            return 1;
        }
        atual = atual->proximo;
    }

    return 0;
}

/* =========================
   LISTA LIGADA SIMPLES
   ========================= */

No *lista = NULL;

/* Inserção na Lista */
void inserirLista(int valor) {
    No *novo = (No*) malloc(sizeof(No));
    novo->valor = valor;
    novo->proximo = lista;

    lista = novo;
}

/* Busca na Lista */
int buscarLista(int valor) {
    No *atual = lista;

    while (atual != NULL) {
        if (atual->valor == valor) {
            return 1;
        }
        atual = atual->proximo;
    }

    return 0;
}

/* =========================
   PROGRAMA PRINCIPAL
   ========================= */

int main() {
    clock_t inicio, fim;
    double tempoLista, tempoHash;

    int valorBusca = 9999;

    /* Inicializa tabela hash */
    for (int i = 0; i < HASH_SIZE; i++) {
        tabelaHash[i] = NULL;
    }

    /* Inserção dos dados */
    for (int i = 0; i < TAM; i++) {
        inserirLista(i);
        inserirHash(i);
    }

    /* =========================
       TESTE LISTA LIGADA
       ========================= */

    inicio = clock();

    if (buscarLista(valorBusca)) {
        printf("Valor encontrado na Lista Ligada\n");
    }

    fim = clock();

    tempoLista = ((double)(fim - inicio)) / CLOCKS_PER_SEC;

    /* =========================
       TESTE TABELA HASH
       ========================= */

    inicio = clock();

    if (buscarHash(valorBusca)) {
        printf("Valor encontrado na Tabela Hash\n");
    }

    fim = clock();

    tempoHash = ((double)(fim - inicio)) / CLOCKS_PER_SEC;

    /* =========================
       RESULTADOS
       ========================= */

    printf("\nTempo de busca na Lista Ligada: %f segundos\n", tempoLista);
    printf("Tempo de busca na Tabela Hash: %f segundos\n", tempoHash);

    return 0;
}
