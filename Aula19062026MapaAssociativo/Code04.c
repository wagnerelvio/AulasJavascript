#include <stdio.h>
#include <string.h>

#define TOTAL_REGIOES 5
#define MAX_ESTADOS 5

// Estrutura para representar um estado
typedef struct {
    int codigo;
    char nome[40];
} Estado;

// Estrutura para representar uma região
typedef struct {
    int codigo;
    char nome[40];
    Estado estados[MAX_ESTADOS];
    int totalEstados;
} Regiao;

int main() {
    Regiao regioes[TOTAL_REGIOES];

    // Região Nordeste
    regioes[0].codigo = 10;
    strcpy(regioes[0].nome, "Regiao Nordeste");
    regioes[0].totalEstados = 3;

    regioes[0].estados[0].codigo = 11;
    strcpy(regioes[0].estados[0].nome, "Maranhao");

    regioes[0].estados[1].codigo = 12;
    strcpy(regioes[0].estados[1].nome, "Piaui");

    regioes[0].estados[2].codigo = 13;
    strcpy(regioes[0].estados[2].nome, "Ceara");


    // Região Norte
    regioes[1].codigo = 20;
    strcpy(regioes[1].nome, "Regiao Norte");
    regioes[1].totalEstados = 3;

    regioes[1].estados[0].codigo = 21;
    strcpy(regioes[1].estados[0].nome, "Amazonas");

    regioes[1].estados[1].codigo = 22;
    strcpy(regioes[1].estados[1].nome, "Para");

    regioes[1].estados[2].codigo = 23;
    strcpy(regioes[1].estados[2].nome, "Acre");


    // Região Sudeste
    regioes[2].codigo = 30;
    strcpy(regioes[2].nome, "Regiao Sudeste");
    regioes[2].totalEstados = 3;

    regioes[2].estados[0].codigo = 31;
    strcpy(regioes[2].estados[0].nome, "Sao Paulo");

    regioes[2].estados[1].codigo = 32;
    strcpy(regioes[2].estados[1].nome, "Rio de Janeiro");

    regioes[2].estados[2].codigo = 33;
    strcpy(regioes[2].estados[2].nome, "Minas Gerais");


    // Região Centro-Oeste
    regioes[3].codigo = 40;
    strcpy(regioes[3].nome, "Regiao Centro-Oeste");
    regioes[3].totalEstados = 3;

    regioes[3].estados[0].codigo = 41;
    strcpy(regioes[3].estados[0].nome, "Goias");

    regioes[3].estados[1].codigo = 42;
    strcpy(regioes[3].estados[1].nome, "Mato Grosso");

    regioes[3].estados[2].codigo = 43;
    strcpy(regioes[3].estados[2].nome, "Mato Grosso do Sul");


    // Região Sul
    regioes[4].codigo = 55;
    strcpy(regioes[4].nome, "Regiao Sul");
    regioes[4].totalEstados = 3;

    regioes[4].estados[0].codigo = 56;
    strcpy(regioes[4].estados[0].nome, "Parana");

    regioes[4].estados[1].codigo = 57;
    strcpy(regioes[4].estados[1].nome, "Santa Catarina");

    regioes[4].estados[2].codigo = 58;
    strcpy(regioes[4].estados[2].nome, "Rio Grande do Sul");


    int codigoRegiao;
    int encontrouRegiao = 0;

    printf("===== MAPA DE REGIOES =====\n\n");

    for (int i = 0; i < TOTAL_REGIOES; i++) {
        printf("%d - %s\n", regioes[i].codigo, regioes[i].nome);
    }

    printf("\nDigite o codigo da regiao: ");
    scanf("%d", &codigoRegiao);

    for (int i = 0; i < TOTAL_REGIOES; i++) {
        if (regioes[i].codigo == codigoRegiao) {
            encontrouRegiao = 1;

            printf("\n%s encontrada.\n", regioes[i].nome);
            printf("Estados associados:\n\n");

            for (int j = 0; j < regioes[i].totalEstados; j++) {
                printf("%d - %s\n",
                       regioes[i].estados[j].codigo,
                       regioes[i].estados[j].nome);
            }

            break;
        }
    }

    if (!encontrouRegiao) {
        printf("\nCodigo de regiao nao encontrado.\n");
    }

    return 0;
}
