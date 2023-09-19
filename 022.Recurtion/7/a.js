/* 7. Вычислить факториал числа используя рекурсию
 */

let i = 5;

function getFact(i) {
    if (i === 1) return i;
    return i * getFact(i - 1)
}

let res = getFact(i);
console.log(res);