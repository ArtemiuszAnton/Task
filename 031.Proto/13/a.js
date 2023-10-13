/* 13. Напишите алгоритм для нахождения факториала числа


 */

let arr = [2, 3, 4, 5, -3, 55, -44];
res = 0
for (const i of arr) {
    if (i > 0) {
        res += i
    }
}

console.log(res);