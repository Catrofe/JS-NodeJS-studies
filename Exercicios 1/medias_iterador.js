//http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/

// calcule a media de diversas notas inseridas pelo usuario.

let qnt_notas_gerar = Math.floor(Math.random() * 21);
let notas_geradas = [];
let valor_total = 0;

for (let i = 0; i < qnt_notas_gerar; i++) {
  nota = notas_geradas.push(Math.floor(Math.random() * 11));
}

notas_geradas.forEach(item => valor_total += item);

let media = valor_total / notas_geradas.length;

console.log('A media das notas geradas é: ' + Math.round(media));