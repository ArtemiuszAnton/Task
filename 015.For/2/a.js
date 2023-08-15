/*  Дан статичный массив элементов. С помощью цикла for найдите произведение
всех элементов массива

 */

let mas = [2, 3, 5, 6, 6];
let result = 1;
for (let i = 0; i < mas.length; i++) {
    result *= mas[i]
}
console.log(result);