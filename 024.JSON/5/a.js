/* 5. На вход подается число n – количество элементов массива. Необходимо
заполнить массив случайными элементами. Если значение массива находится в
диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
их. Обратите внимание, тут как минимум 3 функции. Первая: ф
 */



const n = 5;

function getArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt())
    }
    return arr
}

function isValidArr(arr) {
    if (!Array.isArray(arr)) throw new Error('not array')
    const check = arr.every(el => {
        if (isNaN(el)) return false
        else return true
    })
    if (!check) throw new Error('not number')
}

function findRange(arr) {
    try {
        isValidArr(arr);
        let res = arr.filter(el => {
            if (10 < el && el < 100) return true
        })
        return res
    } catch (error) {
        return error.message
    }
}
let finArr = getArr(n)
const res = findRange(arr)
console.log(res);