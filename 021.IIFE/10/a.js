/*  На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения только четных элементов массива. Если
результат функции проверки – true, то вызывать новую функцию, возвращающую
массив с четными элементами массива
 */

let arr = [2, 3, 4, 556, 66, 5, 53, 44, 55, 6];


function checkArr(arr) {
    let checker = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        }
    })
    return checker
}


function updateArr(arr) {
    const check = checkArr(arr);
    const finArr = [];
    if (check === true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) finArr.push(arr[i])
        }
    } else {
        return 'error'
    }
    return finArr
}
let fin = updateArr(arr)
console.log(fin);