/* 
 */


const arr = [1, 2, 3, 4, 5, 'raz', 'dwa'];
let num = [];
let str = [];

for (let i = 0; i < arr.length; i++) {
   if (!isNaN(arr[i])) {
    num.push(arr[i])
   } else {
    str.push(arr[i])
   }
    
}

console.log(str);
console.log(num);