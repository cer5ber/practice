let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');

let words = ['Hello','Good buy','Thank you'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    
    return result;
}

console.log(words)

btnRandom.addEventListener ('click', () => {
    let index = getRandomNumber(0, words.length-1);
    result.innerText = words[index];

});
