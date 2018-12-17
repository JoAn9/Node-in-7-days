// Stwórz program, któremu można przekazać jako argument ścieżkę pliku tekstowego. Następnie Twój program ma wczytać zawartość tego pliku i na końcu wykonać funkcję skrótu `'sha256'` na nim i ją wyświetlić.

const fs = require('fs');
const crypto = require('crypto');


fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err === null) {
    const hash = crypto.createHmac('sha256', data).digest('hex');
    console.log(hash);
  } else {
    console.log(`error: ${err}`);
  }
})