/*  8. Напишите IIFE, которая принимает массив и возвращает новый массив,
содержащий только уникальные элементы.
[1, 1, 2, 2, 2, 3, 4, 5, 5, 5] –> [1, 2, 3, 4, 5].
 */

let arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];

(function filterArr() {
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!nArr.includes(arr[i])) {
            nArr.push(arr[i])
        }
    }
    console.log(nArr);
}())