// Stwórz aplikację Express. Powinna ona serwować statyczne pliki z folderu ./public/zadanieDnia/. Na stronie głównej możliwe jest głosowanie w ankiecie.

// Obsłuż głosowanie tak, żeby przejście do którejkolwiek ścieżki /vote/yes, /vote/no powodowało dodanie głosu do odpowiedniej opcji. Zwróć do przeglądaki Dziękujemy za głos!.

// Na ścieżce /votes/check wyświetl wyniki ankiety - ilość głosów oddanych na każdą opcję.

const express = require('express');
const app = express();

let voteYes = 0;
let voteNo = 0;

app.use(express.static('./public/zadanieDnia'));

app.get('/vote/yes', (req, res) => {
  voteYes++;
  res.send('Dziękujemy za głos!');
});

app.get('/vote/no', (req, res) => {
  voteNo++;
  res.send('Dziękujemy za głos!')
});

app.get('/votes/check', (req, res) => {
  res.send(`Wyniki: Yes: ${voteYes} No: ${voteNo}`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});