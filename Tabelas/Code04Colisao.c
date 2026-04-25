#include <stdio.h>
#include <string.h>

#define SIZE 10

// Função hash simples: soma do ASCII mod SIZE
int hash_function(char *key) {
    int sum = 0;
    for (int i = 0; i < strlen(key); i++) {
        sum += key[i];
    }
    return sum % SIZE;
}

int main() {
    // Duas strings que causarão colisão com esta função e tamanho de tabela
    char *str1 = "EB"; // E (69) + B (66) = 135
    char *str2 = "Ay"; // A (65) + y (121) = 186 -> Não colide.
    
    // Vamos usar "AB" e "BA" para garantir a soma idêntica
    char *key1 = "AB"; // A(65) + B(66) = 131
    char *key2 = "BA"; // B(66) + A(65) = 131

    int index1 = hash_function(key1);
    int index2 = hash_function(key2);

    printf("Chave: %s -> Indice: %d\n", key1, index1);
    printf("Chave: %s -> Indice: %d\n", key2, index2);

    if (index1 == index2) {
        printf("\nALERTA: Ocorreu uma colisao! Ambas as chaves apontam para o indice %d.\n", index1);
    }

    return 0;
}
