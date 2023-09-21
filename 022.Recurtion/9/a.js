/*
9. Реализуйте поиск максимального числа статичного массива используя рекурсию
 */

let arr = [2, 323, 43, 44, 1];
let count = arr[0];

function findMax(arr) {
    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > count) {
            count = arr[i];
            return count

        }
    }
    return findMax(arr);
}

let res = findMax(arr);
console.log(res);