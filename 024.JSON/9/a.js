/* 9. Вычислить сумму последовательности целых чисел до первого встреченного
нуля. Гарантируется наличие хотя бы одного нуля в последовательности.
Дополнительное условие - убедиться, что все элементы последовательности
являются числами.
[5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)
 */

let arr = [5, 1, 2, 3, 1, 5, 0, 2];

function isValidArr(arr) {
    let bool = arr.every(el => {
        if (!isNaN(el)) return true
    })
    if (!bool) throw new Error('В массиве имеются не только числа')
    return bool
}

function getSum(arr) {
    let bool = isValidArr(arr);
    try {
        if (bool) {
            let res = 0
            for (let i = 0; i < arr.length; i++) {
                res += arr[i]
                if (arr[i] == 0) break
            }
            return res
        }
    } catch (error) {
        return error.message
    }

}

let fin = getSum(arr);
console.log(fin);
