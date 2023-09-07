/* На входе массив. Необходимо создать функцию проверки на то что в массиве
только числа. Функция возвращает true, если в массиве только числа и false в
противном случае
 */

const arr = [2, 3, 4, 5, 6,'e'];
function filterArr() {
        let res = arr.every(function (elem) {
                if (!isNaN(elem)) {
                        return true
                }
        })
        return res
}

let fin = filterArr(arr);
console.log(fin);