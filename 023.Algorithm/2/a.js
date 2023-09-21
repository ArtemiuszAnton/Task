/*  2. На входе массив. Реализуйте две функции. Первая проверяет, что все элементы
массива положительные числа. Вторая функция возвращает массив, в котором
каждое положительное число умножено на 2. Если результат проверки - true,
вызывайте вторую функцию и возвращайте полученный массив

*/

const arr = [323, 45, 6, 77, 6];

function isValid(arr) {
    let valid = arr.every(function (el) {
        if (el > 0) {
            return true
        } else {
            return false
        }
    })
    return valid
}


function getMultiply(arr) {
    let valid = isValid(arr);
    if (valid) {
        let nArr = [];
        for (let i = 0; i < arr.length; i++) {
            nArr.push(arr[i] * 2)
        }
        return nArr  
    } else {
        return 'not Valid'
    }
    
}

let res = getMultiply(arr);
console.log(res);