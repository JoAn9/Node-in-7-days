// Napisz program Node.js, który może przyjąć dwa argumenty: dwie liczby. **Pamiętaj, że argumenty są zawsze tekstem - zamień je w liczbę np. za pomocą `Number(liczba)` lub `parseInt(liczba)`.**

// Następnie wykonaj dodawanie tych dwóch liczb i je wypisz.
// Jeżeli chcesz to możesz spróbować zrobić bardziej zaawansową wersję tego zadania. Twój program umożliwia w niej podanie dowolnej ilości liczb jako argumenty i wyświetla ich sumę. 



if(process.argv.length > 2) {
  console.log(Number(process.argv[2]) + Number(process.argv[3]));
}

let sum = 0;

if(process.argv.length > 2) {
  for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }
}

console.log(sum);