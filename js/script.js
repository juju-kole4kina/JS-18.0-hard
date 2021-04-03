//VARIABLES

let num = 266219;
let num2 = new String(num);
let result = 1;

//CONSOLE OUTPUT

/*let res = num2[0] * num2[1];
console.log(res);
res = res * num2[2];
console.log(res);
res = res * num2[3];
console.log(res);
res = res * num2[4];
console.log(res);
res = res * num2[5];

console.log(res);*/

for (let i = 0; i < num2.length; i++) {
   result = result * num2[i];
   console.log(result);
}
let res1 = result ** 3;
let res2 = new String(res1);
console.log(res2[0], res2[1]);
