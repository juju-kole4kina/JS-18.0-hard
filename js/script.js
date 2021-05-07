'use strict';
// VARIABLES

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let day = new Date();
let numDay = day.getDay();
if (numDay === 0) {
   numDay = 6;
} else {
   numDay--;
}

week.forEach(function (day, i) {
   let str = day;
   if (i === numDay) {
      str = `<b>${day}</b>`;
   } else {
      str = `${day}`;
   }
   if (i === 5 || i === 6) {
      str = `<i>${str}</i>`;
   }
   document.body.insertAdjacentHTML('beforeend', `<div>${str}</div>`);
});


