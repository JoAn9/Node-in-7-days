// Stwórz aplikację Express, która będzie prostym jednowątkowym forum dyskusyjnym. Powinna ona serwować statyczne pliki ze ścieżki './public/zadanieDnia/'.

// Statyczny plik powinien nazywać się add.html i zawierać taki formularz, który ma jedno pole textarea - z treścią komentarza. Formularz powinien kierować do ścieżki /save.

// Ścieżka /save powinna dodawać komentarz do listy już dodanych komentarzy (przechowywaną w ciastku!) i wyświetlać link do powrotu na stronę główną.

// Ścieżka / (strona główna) powinna wyświetlić wszystkie dodane komentarze.

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/add', express.static('./public/zadanieDnia/'));

let comment = '';
let comments = [];

const showComments = () => {
   return (comments.length > 0 ? comments.join(', ') : 'No Comments :( buuu');
}

app.post('/save', (req, res) => {
  const commentId = new Date().toString();
  comment = req.body.newComment;
  comments.push(comment);
  res.cookie(commentId, comment, { maxAge: 2678400000 });
  res.sendFile(__dirname + "/public/zadanieDnia/save.html");
});

app.get('/', (req, res) => {
  res.send(`
    Saved comments: ${showComments()} 
    <br /><br />
    <a href="/add">Add new comment</a>
  `);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});