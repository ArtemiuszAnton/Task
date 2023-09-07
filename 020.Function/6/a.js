/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
Вторая для нахождения количества элементов массива
*/

const n = 4;
function doArr() {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}

let finArr = doArr();

function searchElems(finArr) {
return finArr.length
}

let arrLength = searchElems(finArr);
console.log(arrLength);