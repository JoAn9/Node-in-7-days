// Stwórz taką aplikację Express, która ma pliki statyczne serwowane ze ścieżki './public/zadanie01/'. Na stronie głównej wyświetlaj formularz, w którym można podać dwie liczby.

// Po wysłaniu formularza powinieneś sprawdzić czy liczba B jest dzielnikiem liczby A i wyświetlić odpowiednią informację w przeglądarce użytkownika.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie01'));

app.post('/sciezka/w/backendzie', (req, res) => {
  const { numA, numB } = req.body;
  numberA = Number(numA);
  numberB = Number(numB);  
  const check = (a, b) => {
    if (a % b === 0) {
      return '<- true';
    }
    return '<- false';
  }
  res.send(`Liczba B jest dzielnikiem liczby A ${check(numberA, numberB)}`);
})


app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
