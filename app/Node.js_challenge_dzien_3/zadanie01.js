const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

// W pliku `app/zadanie01.js` znajduje się ciąg `'5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e'`. Twoim zadaniem jest określenie którego z poniższych haseł użyłem do jego wygenerowania:

// - `'??TegoHasła'`
// - `'CodersLab'`
// - `'Node.js Szyfruje Pliki'`
// - `'Zaźółć Gęślą Jaźń'`
// - `'Moje Haslo 1@3!'`
// - `'111#$((@)n'`
// - `'Dzisiaj Szyfruje 83'`

// Nie wiadomo jaki został użyty algorytm funkcji skrótu. Zerknij do działu funkcji skrótu, aby przypomnieć sobie o jakich wspominaliśmy.

const crypto = require('crypto');

const code = ['sha256', 'sha512', 'md5', 'rmd160'];

const text = [
  '??TegoHasła',
  'CodersLab',
  'Node.js Szyfruje Pliki',
  'Zaźółć Gęślą Jaźń',
  'Moje Haslo 1@3!',
  '111#$((@)n',
  'Dzisiaj Szyfruje 83'
];

for(let i=0; i<code.length; i++) {
  for(let j=0; j<text.length; j++) {
    const hash = crypto.createHmac(code[i], text[j]).digest('hex');
    if (hash === MY_PWD_HASH) {
      console.log(`Algorithm: ${code[i]}, text: ${text[j]}`);
      break;
    }
  }
}
