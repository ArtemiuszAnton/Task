/*
 На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения массива с удвоенными значенями каждого
элемента. Если результат функции проверки – true, то вызывать новую функцию,
возвращающую массив с удвоенными элементами
 */

let arr = [2, 3, 4, 5, 66, 77, 8, 12];


function checkArr(arr) {
    let checker = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        }
    })
    return checker
}


function getMultiply(arr) {
    const check = checkArr(arr);
    const finArr = [];
    if (check === true) {
        for (let i = 0; i < arr.length; i++) {
            finArr.push(arr[i] * 2)
        }
    } else {
        return 'error'
    }
    return finArr
}
let fin = getMultiply(arr)
console.log(fin);