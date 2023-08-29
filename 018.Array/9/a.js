/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
ввод только чисел. Использовать forEach, reduce

 */

let n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}

res = 0
arr.forEach(function (elem) {
    if (!isNaN(elem)) {
        res += elem
    }
})
console.log(res);

// reduce

let res_2 = arr.reduce(function (elem, sum) {
    return elem + sum
})

console.log(res_2);