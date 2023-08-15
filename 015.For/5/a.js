/* Найдите максимальное значение в статичном массиве используя цикл. 
 */

let mas = [1, 3, 9, 5, 6, 8];
let result = 0;
for (let i = 0; i < mas.length; i++) {
    if (mas[i] > result) {
        result = mas[i]
    }
}
console.log(result);

