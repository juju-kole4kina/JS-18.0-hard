'use strict';
// VARIABLES

let timeDisplay = function () {
   let week = ['воскресенье, ', 'понедельник, ', 'вторник, ', 'среда, ', 'четверг, ', 'пятница, ', 'суббота, '];
   let month = [' января ', ' февраля ', ' марта ', ' апреля ', ' мая ', ' июня ', ' июля ', ' августа ', ' сентября ',
      ' октября ', ' ноября ', ' декабря '];
   let date = new Date();

   let addZero = function (elem) {
      if (String(elem).length === 1) {
         return '0' + elem;
      } else {
         return String(elem);
      }
   };
   let changeEnding = function (num, timeElem = '') {
      let textVariant = (timeElem === 'h' ? ['час', 'часа', 'часов'] :
         timeElem === 'm' ? ['минута', 'минуты', 'минут'] :
            ['секунда', 'секунды', 'секунд']);
      let n = num % 10;
      return num > 4 && num < 20 ? num + textVariant[2] :
         n === 1 ? num + textVariant[0] :
            n > 1 && n < 5 ? num + textVariant[1] :
               num + textVariant[2];
   };
   let textTime = 'Сегодня ' + week[date.getDay()] + ' ' + date.getDate() + ' ' + month[date.getMonth()] +
      ' ' + date.getFullYear() + ' года,' + ' ' + changeEnding(date.getHours(), 'h') +
      ' ' + changeEnding(date.getMinutes(), 'm') + ' ' + changeEnding(date.getSeconds());
   let time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) +
      ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDay()) + '.' +
      addZero(date.getMonth()) + '.' + date.getFullYear();

   document.querySelector('.text-time').textContent = textTime;
   document.querySelector('.time').textContent = time;

};

let elem = document.createElement('div');
elem.classList.add('text-time');
document.body.appendChild(elem);

elem = document.createElement('div');
elem.classList.add('time');
document.body.appendChild(elem);
console.dir(elem);

setInterval(timeDisplay, 1000);
