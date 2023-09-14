/* Napishite функцию, которая принимает массив чисел и находит минимальное и
максимальное значения в этом массиве. Добавьте проверки на ввод и выведите
сообщение об ошибке, если значения массива не соответствуют условиям задачи.
*/

let arr = [2, 3, 4, 0.5, 54, 67, 1];

function isValid(arr) {
    let check = arr.every(function (el) {
        if (!isNaN(el)) {
           return true 
        } else {
            return false
        }
    })
}

let check = isValid(arr)

function findMinNum(arr) {
    if (check === true) {
        let min = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
    } else {
        return 'error'
    }
    return min
}



let res = findMinNum(arr);
console.log(res);

// findMax

function findMaxNum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

let maxNum = findMaxNum(arr);
console.log(maxNum);