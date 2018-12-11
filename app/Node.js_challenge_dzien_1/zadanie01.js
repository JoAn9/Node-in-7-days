// Napisz taki program Node.js, w którym wyświetlisz swoje imię i nazwisko. Następnie po 5 sekundach program powinien jeszcze wypisać `wita się z Node.js!` i zakończyć swoje działanie. 

const hello = () => console.log('Jo An');
const myTimeout = setTimeout(() => {
  console.log(' wita sie z node :)')
}, 2000);

hello();