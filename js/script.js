'use strict';

//1. 

let lang = prompt('ru or en?');

//if

if (lang === 'ru') {
   console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
} else if (lang === 'en') {
   console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
} else {
   console.log('Что-то пошло не так');
}

//switch

switch (lang) {
   case 'ru':
      console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
      break;
   case 'en':
      console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
      break;
   default:
      console.log('Что-то пошло не так');
}

//array

let langArr = [];

langArr['ru'] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
langArr['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//let lang = 'ru';

console.log(langArr[lang]);

//2.

let namePerson = prompt('What is your name?');

console.log((namePerson === 'Артём') ? 'Директор' :
   (namePerson === 'Максим') ? 'Преподаватель' :
      'Студент');