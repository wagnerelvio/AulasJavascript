#include <stdio.h>
#include <string.h>

#define TAM 15

// Estrutura que representa uma associação chave -> valor
typedef struct {
    int chave;
    char valor[50];
} Mapa;

int main() {
    Mapa cidades[TAM];

    // Adicionando associações entre códigos e cidades
    cidades[0].chave = 11;
    strcpy(cidades[0].valor, "Sao Paulo");

    cidades[1].chave = 21;
    strcpy(cidades[1].valor, "Rio de Janeiro");

    cidades[2].chave = 31;
    strcpy(cidades[2].valor, "Belo Horizonte");

    cidades[3].chave = 41;
    strcpy(cidades[3].valor, "Curitiba");

    cidades[4].chave = 51;
    strcpy(cidades[4].valor, "Porto Alegre");

    cidades[5].chave = 61;
    strcpy(cidades[5].valor, "Brasilia");

    cidades[6].chave = 71;
    strcpy(cidades[6].valor, "Salvador");

    cidades[7].chave = 81;
    strcpy(cidades[7].valor, "Recife");

    cidades[8].chave = 85;
    strcpy(cidades[8].valor, "Fortaleza");

    cidades[9].chave = 86;
    strcpy(cidades[9].valor, "Teresina");

    cidades[10].chave = 91;
    strcpy(cidades[10].valor, "Belem");

    cidades[11].chave = 92;
    strcpy(cidades[11].valor, "Manaus");

    cidades[12].chave = 95;
    strcpy(cidades[12].valor, "Boa Vista");

    cidades[13].chave = 98;
    strcpy(cidades[13].valor, "Sao Luis");

    cidades[14].chave = 62;
    strcpy(cidades[14].valor, "Goiania");

    int opcao;
    int encontrado = 0;

    printf("===== LISTA DE CIDADES =====\n\n");

    for (int i = 0; i < TAM; i++) {
        printf("%d - %s\n", cidades[i].chave, cidades[i].valor);
    }

    printf("\nDigite o codigo da cidade desejada: ");
    scanf("%d", &opcao);

    for (int i = 0; i < TAM; i++) {
        if (cidades[i].chave == opcao) {
            printf("\nCidade encontrada: %s\n", cidades[i].valor);
            encontrado = 1;
            break;
        }
    }

    if (!encontrado) {
        printf("\nCodigo nao encontrado.\n");
    }

    return 0;
}
