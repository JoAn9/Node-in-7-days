const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static('./public/zadanie02'));

let name = '';

app.post('/cookie/set', (req, res) => {
  name = req.body.name;
  res.cookie('test', name, { maxAge: 2678400000 });
  res.send(`Name ${name} saved!`);
});

app.get('/cookie/show', (req, res) => {
    res.send(`Name saved in cookie: ${name}`);
});

const check = () => {
  if (name === '' || name === undefined) {
    return 'Name unsaved! :(';
  }
  return 'Name saved! :)'
}

app.get('/cookie/check', (req, res) => {
  res.send(check());
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
