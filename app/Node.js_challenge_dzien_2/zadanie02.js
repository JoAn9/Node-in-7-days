// Napisz program, który wyświetli zawartość wszystkich plików w folderze `app/data/zadanie02/`.

// Skorzystaj z możliwości listowania plików w folderze. Po otrzymaniu listy plików wyświetlaj je w pętli.

const fs = require('fs');

fs.readdir('./data/zadanie02', (error, data) => {
  if (error === null) {
    data.forEach(file => {
      fs.readFile(`./data/zadanie02/${file}`, 'utf8', (error, data) => {
        if (error === null) {
          console.log(`${file}: ${data}`);
        } else {
          console.log(error);
        }
      })
    })
  } else {
    console.log(error);
  }
})