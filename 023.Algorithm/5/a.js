/* 
5. Напишите функцию countNumbers(arr), которая считает количество чисел в
массиве arr. Используйте рекурсию.
 */

let arr = [23, 3, 4, 54, 6576, 87, 98, 93];
let count = 0;

function countNumbers(arr) {
        
        if (!arr.length) return;
count++
        countNumbers(arr.slice(1))

}

countNumbers(arr);
console.log(count);