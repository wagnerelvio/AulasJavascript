#include <stdio.h>

#define TAMANHO_TABELA 11 // Dica: Usar números primos reduz colisões!

// Função de Espalhamento (Hash Function)
int calcularHash(int chave) {
    // Garante que o índice estará sempre entre 0 e (TAMANHO_TABELA - 1)
    return chave % TAMANHO_TABELA;
}

int main() {
    int chaves[] = {105, 234, 549, 12};
    int total_chaves = sizeof(chaves) / sizeof(chaves[0]);

    for (int i = 0; i < total_chaves; i++) {
        int indice = calcularHash(chaves[i]);
        printf("A chave %d sera guardada no indice %d da tabela.\n", chaves[i], indice);
    }

    return 0;
}
