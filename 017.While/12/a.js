/* Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

 */

let arr = [2, 5, 9, 15, 0, 4];
let res = []
i = 0
while (i < arr.length) {
    
    if (arr[i] % 5 === 0) {
        res.push(arr[i])
    } i++
    
}
console.log(res);