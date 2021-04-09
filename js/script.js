'use strict';
// VARIABLES

let arr = ['1234', '2345', '2456', '3124', '43231', '7643', '4980'];

// FUNCTION

let exOne = function () {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
         console.log(arr[i]);
      }
   }
};

let exTwo = function (num) {
   let arr = [];

   if (num !== 1) {
      arr.push(1);
      for (let j = 2; j * j <= num; j++) {
         if (num % j === 0) {
            arr.push(j);
         }
      }
   }
   arr.push(num);
   return arr;
};

let callExTwo = function () {
   for (let i = 1; i <= 100; i++) {
      let n = exTwo(i);

      if (n.length <= 2) {
         console.log(`${i}: Делители этого числа: ${n.join(' и ')}`);
      }
   }
};

// FUNCTION CALL
exOne();
callExTwo();

// CONSOLE OUTPUT


