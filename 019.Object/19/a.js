/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.
*/

let n = 4;
let arr = [];
for (let i = 0; i < n; i++) {
    let num = prompt('Введите эл массива, один из которых 0')
    if (!isNaN(num)) {
        arr.push(+num)
    }
}


let res = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        break
    } else {
        res += arr[i]
    }

}
console.log(res);



// let res = 0
// arr.forEach(function (elem) {
//     if (elem !== 0) {
//         res += elem
//     } else {

//     }
// })

let isNul = false;
let res_2 = arr.reduce(function (sum, elem) {
    if (elem === 0 || isNul == true) {
        isNul = true
        return sum + 0;
    } else {
        return sum + elem
    }
}, 0)