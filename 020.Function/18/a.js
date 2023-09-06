/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо создать новый массив, где каждый элемент
возведен в квадрат. map */

let n = 4;
let arr = [];
for (let i = 0; i < n; i++) {
    let num = prompt()
    if (!isNaN(num)) {
        arr.push(+num)
    }

}
let res = arr.map(function (elem) {
    return elem ** 2
})
console.log(res);