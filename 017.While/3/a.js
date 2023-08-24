/* Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
элементов этого массива.

 */

let mas = [2, 3, 4, 5];
let res = 1;
// for (let i = 0; i < mas.length; i++) {
//     res *= mas[i]
// }
// console.log(res);

// do while

let i = 0;
// do {
//     res *= mas[i]
//     i++
// } while (i < mas.length);

// console.log(res);

// while 

while (i < mas.length) {
    
    res *= mas[i]
    i++
}
console.log(res);