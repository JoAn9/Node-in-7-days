// Stwórz taką aplikację Express, która ma trzy ścieżki:

// '/name/set/:imie' - zapamiętuje ona w programie podane imię oraz wyświetla je w przeglądarce.
// '/name/show' - wyświetla ona podane wcześniej imię.
// '/name/check' - wyświetla ona informację, czy imię zostało już zapisane w programie czy nie.


const express = require('express');
const app = express();

let name;

app.get('/', (req, res) => {
  res.send('Hello hello');
});

app.get('/name/set/:imie', (req, res) => {
  name = req.params.imie;
  res.send(`Name: ${name}`);
});

app.get('/name/show', (req, res) => {
  res.send(`Showing name: ${name}`);
});

app.get('/name/check', (req, res) => {
  const checkName = () => {
    if (name !== undefined) {
      return 'true';
    }
    return 'false';
  }

  res.send(`Name was saved: ${checkName()}`);
});

app.listen(3001, () => {
  console.log('Serwer uruchomiony na porcie 3001');
});

