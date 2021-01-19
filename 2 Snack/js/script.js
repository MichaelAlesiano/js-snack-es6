// 2) Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeri = [5, 6, 7, 8, 9, 10];
console.log(numeri);

const numeriPari = 'I numeri pari sono : ';

const numeriDispari = 'I numeri dispari sono : ';

document.getElementById('stampa').innerHTML =
`
<div class="verde" id="pari">

${numeriPari}

</div>

<div class="rosso" id="dispari">

${numeriDispari}

</div>
`;

for (let i = 0; i < numeri.length; i++) {
  numeri[i];
  console.log(numeri[i]);
  if (numeri[i]%2 == 0) {
    document.getElementById('pari').innerHTML += numeri[i];
  } else {
    document.getElementById('dispari').innerHTML += numeri[i];
  }
};
