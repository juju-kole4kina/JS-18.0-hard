'use strict';

// FUNCTION

const foo = function (arg) {
   let res = '';
   if (typeof arg === 'string') {
      const maxLength = 30;
      const str = arg.trim();
      if (str.length > maxLength) {
         res = str.substr(0, maxLength) + '...';
      } else {
         res = str;
      }
   }
   return res;
};

// CONSOLE OUTPUT

console.log('foo(): ', foo(10));
console.log('foo(): ', foo('Текст'));
console.log('foo(): ', foo('Оооооооооооооооооооочень длинный текст'));
