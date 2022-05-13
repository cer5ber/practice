let colors = ['red', 'blue','yellow']
var text =['Привет','Добрый день','Доброе утро','Спокойной ночи','Приятного аппетита','Всего доброго','',]



function randAccess(arr){
    return arr.splice([Math.floor(Math.random()*arr.length)],1)
  }
  
let colors = ['red', 'blue','yellow']
var text =['Привет','Добрый день','Доброе утро','Спокойной ночи','Приятного аппетита','Всего доброго','',]
  
  color.forEach(function(item, index){
      console.log(index + " " + item + ":" + randAccess(animal));
  })