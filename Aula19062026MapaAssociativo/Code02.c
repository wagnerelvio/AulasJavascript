#include <stdio.h>
#include <string.h>

#define TAM 5

// Estrutura que representa uma associação chave -> valor
typedef struct {
    int chave;
    char valor[50];
} Mapa;

int main() {
    Mapa cardapio[TAM];

    // Adicionando associações
    cardapio[0].chave = 101;
    strcpy(cardapio[0].valor, "Parmegiana de frango");

    cardapio[1].chave = 102;
    strcpy(cardapio[1].valor, "Parmegiana de carne");

    cardapio[2].chave = 103;
    strcpy(cardapio[2].valor, "Almondegas");

    cardapio[3].chave = 104;
    strcpy(cardapio[3].valor, "Bisteca suina");

    cardapio[4].chave = 105;
    strcpy(cardapio[4].valor, "Bife acebolado");

    int opcao;
    int encontrado = 0;

    printf("===== CARDAPIO =====\n\n");

    for (int i = 0; i < TAM; i++) {
        printf("%d - %s\n", cardapio[i].chave, cardapio[i].valor);
    }

    printf("\nEscolha o numero do prato: ");
    scanf("%d", &opcao);

    for (int i = 0; i < TAM; i++) {
        if (cardapio[i].chave == opcao) {
            printf("\nPrato escolhido: %s\n", cardapio[i].valor);
            encontrado = 1;
            break;
        }
    }

    if (!encontrado) {
        printf("\nOpcao invalida. Prato nao encontrado.\n");
    }

    return 0;
}
