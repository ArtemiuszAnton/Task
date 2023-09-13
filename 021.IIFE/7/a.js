/* На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения суммы всех элементов массива. Если
результат функции проверки – true, то вызывать новую функцию, возвращающую
сумму всех элементов массива

 */

let arr = [2, 3, 45, 5, 665, 43, 'f'];

function checkArr(arr) {
    let res = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        }
    })
    return res

}



function getSum(arr) {
    const check = checkArr(arr);
    if (check === true) {
        let res = arr.reduce(function (sum, elem) {
            return sum + elem
        }, 0)
        return res
    } else {
        return 'error'
    }
}
let fin = getSum(arr)
console.log(fin);