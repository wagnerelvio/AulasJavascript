#include <stdio.h>

#define TAMANHO_TABELA 11
#define VAZIO -1

int tabela[TAMANHO_TABELA];

// Funcao de Espalhamento Linear
int funcaoEspalhamentoLinear(int chave) {
    int a = 3;
    int b = 7;

    return (a * chave + b) % TAMANHO_TABELA;
}

// Inicializa a tabela com posicoes vazias
void inicializarTabela() {
    for (int i = 0; i < TAMANHO_TABELA; i++) {
        tabela[i] = VAZIO;
    }
}

// Insere uma chave tratando colisao
void inserir(int chave) {
    int indice = funcaoEspalhamentoLinear(chave);
    int indiceOriginal = indice;

    while (tabela[indice] != VAZIO) {
        printf("Colisao: chave %d tentou entrar no indice %d, mas ja existe a chave %d\n",
               chave, indice, tabela[indice]);

        indice = (indice + 1) % TAMANHO_TABELA;

        if (indice == indiceOriginal) {
            printf("Tabela cheia. Nao foi possivel inserir a chave %d\n", chave);
            return;
        }
    }

    tabela[indice] = chave;
    printf("Chave %d inserida no indice %d\n", chave, indice);
}

// Mostra a tabela
void exibirTabela() {
    printf("\nTabela de Espalhamento:\n");

    for (int i = 0; i < TAMANHO_TABELA; i++) {
        if (tabela[i] == VAZIO) {
            printf("Indice %d: vazio\n", i);
        } else {
            printf("Indice %d: %d\n", i, tabela[i]);
        }
    }
}

int main() {
    int chaves[] = {15, 25, 35, 45, 55, 68};
    int quantidade = sizeof(chaves) / sizeof(chaves[0]);

    inicializarTabela();

    for (int i = 0; i < quantidade; i++) {
        inserir(chaves[i]);
    }

    exibirTabela();

    return 0;
}
