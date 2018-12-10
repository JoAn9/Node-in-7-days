console.log('Wygląda na to, że wszystko działa :)');

const text = 'Hello world';
let counter = 0;

const intervalId = setInterval(() => {
    console.log(text[counter]);
counter++;
if (counter === text.length){
    clearInterval(intervalId);
}
}, 400);

process.argv.forEach((v, i) => console.log(`${i}: ${v}`))