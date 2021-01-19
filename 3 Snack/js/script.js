// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const primaParola = prompt('Inserisci la prima parola..');
const secondaParola = prompt('Inserisci la seconda parola..');

console.log(primaParola);
console.log(secondaParola);

let lunghezzaPrima = primaParola.length;
let lunghezzaSeconda = secondaParola.length;

console.log(lunghezzaPrima);
console.log(lunghezzaSeconda);

if (lunghezzaPrima == lunghezzaSeconda ) {
  document.getElementById('stampa').innerHTML = primaParola + ' ' + secondaParola;
} else if (lunghezzaPrima > lunghezzaSeconda ) {
  document.getElementById('stampa').innerHTML = primaParola;
} else {
  document.getElementById('stampa').innerHTML = secondaParola;
};
