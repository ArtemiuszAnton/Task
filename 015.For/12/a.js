/* Найдите минимальное значение в массиве используя цикл

 */

let mas = [2, 3, 0.5, 5, 7, 6, 12, 16];
let res = 1
for (let i = 0; i < mas.length; i++) {

    if (res > mas[i]) {
        res = mas[i]
    }
}
console.log(res);
