// Stwórz taką aplikację Express, która potrafi przyjąć w ścieżce dwie liczby. Następnie odbierz je, zsumuj, a sumę wyświetl w przeglądarce.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello hello');
});

app.get('/:number1/:number2', (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  res.send(`The sum of these two numbers is: ${num1 + num2}`);
})

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
})