//Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100000));
}
numeros.sort();

console.log(numeros[numeros.length - 1]);