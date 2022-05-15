let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let block = document.querySelector('#mini')

let colors = ['red','blue','orange']
let words = ['Привет','Добрый день','До свидания','Доброе утро','Cпокойной ночи','Пока'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    
    return result;
}

btnRandom.addEventListener ('click', () => {
    let index = getRandomNumber(0,words.length-1);
    result.innerText = words[index];

});






