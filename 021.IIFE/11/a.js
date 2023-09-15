/*  На входе динамичный массив; число n с клавиатуры. Необходимо написать
функцию, возвращающую элементы массива, которые больше указанного числа.
[1, 9, 45, 11, 10], 10 -> 45, 11


 */

const n = +prompt('Введите число для сравнения');
const len = +prompt('Введите количество эл массива');

function doArr(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(prompt('Введите эл массива'))
    }
    return arr

}

let arr = doArr(len);

function filterArr(arr, n) {
    let res = arr.filter(function (elem) {
        if (elem > n) {
            return true
        }
    })
    return res
}

let finArr = filterArr(arr, n);
console.log(finArr);