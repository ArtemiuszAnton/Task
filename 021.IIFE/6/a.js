/* Napishite функцию, которая принимает массив чисел и находит минимальное и
максимальное значения в этом массиве. Добавьте проверки на ввод и выведите
сообщение об ошибке, если значения массива не соответствуют условиям задачи.
*/

let arr = [2, 3, 4, 0.5, 54, 67, 1];

function findMinNum(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}



let res = findMinNum(arr);
console.log(res);