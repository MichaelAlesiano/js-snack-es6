// jsnack 5
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina'];

let primoNumero = parseInt(prompt('Inserisci il primo numero compreso fra 0 e 4..'));
let secondoNumero = parseInt(prompt('Inserisci il secondo numero che deve essere maggiore rispetto al primo..'));

const utente = [];

myArray.forEach((element, index) => {
  if (index >= primoNumero && index <= secondoNumero) {
    utente.push(element);
  }
});

console.log(utente);
