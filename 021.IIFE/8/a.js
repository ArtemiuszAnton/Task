// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива


const arr = ['raz', 'dwa', 'tri'];

function checkArr(arr) {
    let checker = arr.every(function (elem) {
        if (isNaN(elem)) {
            return true
        }
    })
    return checker
}

function getSum(arr) {
    const check = checkArr(arr);
    let sum = ''
    if (check === true) {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
    } else {
        console.log('error');
    }
    return sum
}
let fin = getSum(arr)
console.log(fin);
