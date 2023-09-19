/* 6. На входе массив array. Посчитайте количество элементов массива используя
рекурсию
*/

let arr = [1, 212, 323, 2, 23, 4, 4, 5];
let count = 0;

function getSum(arr) {
    if (count === arr.length) return count;
    count++
    return getSum(arr);
}

let res = getSum(arr);
console.log(res);