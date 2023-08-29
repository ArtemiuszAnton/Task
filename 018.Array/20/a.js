/* 20.На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Оставьте в нем только положительные числа. Filter
*/

let n = 4;
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}

let res = arr.filter(function (elem) {
    return elem >= 0
})

console.log(res);

