//crie um programa que entre com os dados de altura e sexo de 5 pessoas. 
//Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. 
//Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.

let pessoas = [];
let qnt_sexo = {'Masculino': 0, 'Feminino': 0}
let maior_altura = 0;


for (let i = 0; i < 5; i++) {
    let sexo_binario = Math.floor(Math.random() * 2);

    if (sexo_binario){
        let altura = (Math.random() * 0.2) * 10;
        pessoas.push({'sexo': 'Masculino', 'altura': altura.toFixed(2)})
        
    } else{
        let altura = (Math.random() * 0.2) * 10;
        pessoas.push({'sexo': 'Feminino', 'altura': altura.toFixed(2)});
    }
}

pessoas.forEach(item => {
    if (item.sexo === 'Feminino') {
        qnt_sexo.Feminino++;
    } else {
        qnt_sexo.Masculino++;
    }

    if (item.altura > maior_altura){
        maior_altura = item;
    }

});


if (maior_altura.sexo === 'Masculino'){
    console.log('Quantidade de Homens: '+ qnt_sexo.Masculino + '. Quantidade de Mulheres: '+ qnt_sexo.Feminino + '. Maior altura é de um Homem.');
}else {
    console.log('Quantidade de Homens: '+ qnt_sexo.Masculino + '. Quantidade de Mulheres: '+ qnt_sexo.Feminino + '. Maior altura é de uma Mulher.');
}

