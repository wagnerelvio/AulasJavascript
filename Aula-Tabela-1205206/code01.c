#include <stdio.h>

#define TAMANHO_TABELA 10

// Função de Espalhamento Linear
int funcaoEspalhamentoLinear(int chave) {
    int a = 3;
    int b = 7;
    int m = TAMANHO_TABELA;

    return (a * chave + b) % m;
}

int main() {
    int chaves[] = {12, 25, 37, 49, 56, 68};
    int quantidade = sizeof(chaves) / sizeof(chaves[0]);

    printf("Funcao de Espalhamento Linear\n\n");

    for (int i = 0; i < quantidade; i++) {
        int indice = funcaoEspalhamentoLinear(chaves[i]);

        printf("Chave: %d -> Indice na tabela: %d\n", chaves[i], indice);
    }

    return 0;
}
