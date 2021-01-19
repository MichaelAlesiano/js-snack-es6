// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numero = parseInt(prompt('Inserisci un numero..'));

console.log(numero);

if (numero %2 == 0) {
  document.getElementById('stampa').innerHTML = 'Il numero che hai scritto è pari : ' + numero;
} else {
  document.getElementById('stampa').innerHTML = 'Il numero che hai scritto era dispari : ' + numero + ', ora è pari : ' + ((numero)+1);
}
