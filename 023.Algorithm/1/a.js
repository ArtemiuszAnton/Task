/* Реализуйте функцию searchBinary, которая принимает два аргумента: число и
массив чисел от 1 до 15 включительно. Функция должна вернуть индекс, если
указанное число найдено в массиве, и выдать сообщение об ошибке, если число
не обнаружено в массиве.

 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let num = 14;

function searchBinary(arr, num) {
    let left = 0;
    let right = arr.length;
    let res;
    for (let i = left; i < right; i++) {

        let mid = Math.round((left + right) / 2)
        if (arr[mid] == num) {
            res = mid
    
        } else if (arr[mid] > num) {
            right = mid
        } else {
            left = mid
        }
    }
    if (res) {
        return 'Gratulation! ' + res
    } else {
        return 'error find'
    }
}


let res = searchBinary(arr, num);
console.log(res);