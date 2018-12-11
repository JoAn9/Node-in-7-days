// Napisz program, w którym otworzysz plik znajdujący się w `app/data/zadanie01/input.json` (z poziomu Twojego programu to będzie plik `./data/zadanie01/input.json`).

// Jest to tablica liczb w formacie JSON. Aby ją rozkodować do tablicy JS skorzystaj z `JSON.parse(daneWejsciowe)`.

// Następnie zsumuj wszystkie liczby, a wynik zapisz tekstem do pliku `app/data/zadanie01/sum.txt`.

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (error, data) => {
  if(error === null) {
    let sum = 0;
    sum = JSON.parse(data).reduce((a,b) => a+b);
    console.log(sum);
    fs.writeFile('./data/zadanie01/sum.txt', sum, (error) => {
      if(error === null) console.log('Saved!')
      else console.log('Not saved because: ' + error);
    })
  } else {
    console.log('not working... :(');
  }
});