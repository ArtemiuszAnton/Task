/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
Вторая для проверки, что в массиве только числа. Третья для получения
произведения всех элементов массива. Если результат функции проверки – true,
то вызывать новую функцию, возвращающую произведение всех элементов
массива
 */

let n = 5;

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++)  arr.push(prompt())
    return arr
}
let arr = doArr(n);

function multiplyArr(arr) {
    let res = arr.reduce((sum, elem) => {
        return sum * elem
    }, 1)
    return res
}

let mult = multiplyArr(arr);
console.log(mult);