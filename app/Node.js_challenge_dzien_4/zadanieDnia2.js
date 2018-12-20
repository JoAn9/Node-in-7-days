// Spróbuj zmodyfikować powyższy kod w taki sposób, aby zwracać przeglądarce tekst na temat jej samej.

// Podpowiedź: chodzi o odczyt nagłówka 'user-agent'.

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', "text/html; charset=utf-8");
  res.end(req.headers['user-agent']);
});

server.listen(3000, () => {
  console.log('Server works on port 3000');
});