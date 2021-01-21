// jsnack 4
// Creare un array di oggetti: ogni oggetto descriverà una bici con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const biciclette = [
  {
    nome : 'Bmx',
    peso : 10
  },
  {
    nome : 'Mountain bike',
    peso : 2
  },
  {
    nome : 'Bici da corsa',
    peso : 8
  }
];

console.log(biciclette);

biciclette.forEach((element) => {
  const {nome,peso} = element;
  console.log(element.nome);
  console.log(element.peso);
});

let biciMinore = biciclette[0];
console.log(biciMinore);

biciclette.forEach((element) => {
  if (biciMinore.peso > element.peso) {
    biciMinore = element
  }
});
console.log(biciMinore);

document.getElementById('stampa').innerHTML = `La bici è : ${biciMinore.nome}, che pesa : ${biciMinore.peso}`;
