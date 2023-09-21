/* 3. На входе два массива чисел. Реализуйте функцию, которая проверяет, есть ли в
обоих массивах хотя бы один общий элемент, и возвращает true, если такой
элемент найден. Если нет общих элементов, функция возвращает false.

 */


let arr_1 = [32, 4, 32, 5, 66];
let arr_2 = [3, 7, 5, 65, 8];
function isValidArrs(arr_1, arr_2) {
    let res_1 = arr_1.every(el => !isNaN(el))
    let res_2 = arr_2.every(el => !isNaN(el))
    return res_1 && res_2
}
function findTwin(arr_1, arr_2) {
    let valid = isValidArrs(arr_1, arr_2)
    if (valid) {
        let res = arr_1.some((el) => {
            return arr_2.includes(el) ? true : false;
        });
        return res
    } else {
        return 'error'
    }

}

let res = findTwin(arr_1, arr_2);
console.log(res);