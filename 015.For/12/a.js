/* Найдите минимальное значение в массиве используя цикл

 */

let mas = [ 2, 3, 1, 5, 7, 6, 12, 16];
let res = mas[1]
for (let i = 0; i < mas.length; i++) {
    
    if (res < mas[i]) {
        res++
    }
    console.log(mas[i]);
}
