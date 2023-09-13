/* Напишите функцию, которая принимает массив строк и находит строку с
максимальной длиной. Добавить проверки

 */

let arr = ['jeden', 'dwa', 'trzy', 'cztery'];

function findBigElem(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    let maxStr = arr.filter(function (elem) {
        return (elem.length === max) ? elem : null
    }
    )
    return maxStr
}

let res = findBigElem(arr);
console.log(res);