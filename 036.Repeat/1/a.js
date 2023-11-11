/* 1. На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо создать функцию возвращающую новый
массив из отфильтрованных значений, где строка начинается на [a, h].
[“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]
 */


let n = 5;

function doArr(n) {
   let arr = []
   for (let i = 0; i < n; i++) {
      arr.push(prompt())
   }
   return arr
}

function filtArr(n) {
   let res = doArr(n)
   return res.filter(el => (el[0] == 'h' || el[0] == 'a'))
}

let result = filtArr(n);
console.log(result);
