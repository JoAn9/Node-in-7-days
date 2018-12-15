// Dzisiejsze zadanie dnia pozwoli Ci stworzyć program "TrAwKa". Ma on modyfikować plik tekstowy w taki sposób, aby każdy nieparzysty znak był pisany wielką literą, a parzysty małą literą.

// Efekt będzie nieco przypominał nieprzystrzyżony trawnik ;) Np. plik z zawartością `Hello, World!` zamieni na `HeLlO, wOrLd!`.

const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (error, data) => {
  if (error === null) {
    let text = [];
    for(let i=0; i<data.length; i++) {
      if (i % 2 === 0) text[i] = data[i].toUpperCase()
      else text[i] = data[i].toLowerCase();
    }
    text = text.join('');
    fs.writeFile('./data/zadanieDnia/trawka.txt', text, (error) => {
      if (error === null) console.log('Saved! :)')
      else console.log('Not saved because: ' + error)
    });
  }
})