// Faça um programa que entre com cinco números e imprima o quadrado de cada número.

let teste = readline();

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(Math.floor(Math.random() * 101));
}

numeros.forEach(item => console.log('Item: '+ item + '. Item ao quadrado: '+ item * item));