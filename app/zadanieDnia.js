// Sleep sort to zabawny sposób sortowania liczb. Polega on na tym, że każda liczba jest wypisana dopiero po tylu sekundach ile wynosi jej wartość.

// Przykładowo posiadając liczby: `4, 1, 7, 4, 5` wypisujemy `4` po 4 sekundach, `1` po sekundzie, `7` po 7 sekundach itd. Przez to program w tym przypadku wykonuje się 7 sekund a jego wyjście wygląda w ten sposób:

// Stwórz program Node.js, który może przyjąć dowolną ilość argumentów: liczby. **Pamiętaj, że argumenty są zawsze tekstem - zamień je w liczbę np. za pomocą `Number(liczba)` lub `parseInt(liczba)`.** Pamiętaj, że dwa pierwsze argumenty tablicy `process.argv` trzeba pominąć!

// Następnie wypisz w konsoli liczby od najmniejszej do największej korzystając ze sleep sort. Do zadania użyj `setTimeout`, a czas mnóż razy 1000 (żeby `1` odpowiadało jednej sekundzie).

for (let i=2; i<process.argv.length; i++) {
  setTimeout(() => {
    console.log(process.argv[i]);
  }, Number(process.argv[i])*1000);
}
