/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Значения могут быть строкового либо числового типа
данных. Необходимо из этих элементов составить 2 массива: со строками и второй
массив, соответственно, с числами. forEach

 */

let n = 4;
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

let arr_1 = [];
let arr_2 = [];

arr.forEach(function (elem) {
    if (isNaN(elem)) {
        arr_1.push(elem)
    } else {
        arr_2.push(elem)
    }
})

console.log(arr_1);
console.log(arr_2);