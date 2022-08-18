//Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

let idades = [];
let maior_idade = 0;
let menor_idade = 0;
let idosos = 0;

pessoas = Math.floor(Math.random() * 101)

for (let i = 0; i < pessoas; i++) {
    idades.push(Math.floor(Math.random() * 101));
}

idades.forEach(item => {
    if (item < 18) {
        menor_idade++;
    } else if(item >= 61){
        idosos++;
    }
    else {
        maior_idade++;
    }
});

console.log('Quantidade de pessoas menores de idade: ' + menor_idade);
console.log('Quantidade de pessoas maiores de idade: ' + maior_idade);
console.log('Quantidade de pessoas idosas: ' + idosos);
