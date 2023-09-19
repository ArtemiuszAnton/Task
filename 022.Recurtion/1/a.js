/* Отобразите в строке через пробел числа от 0 до 10 по возрастанию используя
рекурсию
 */

let i = 10;

function getNums(i) {
    if (i === 0) return i
    return `${i} ` + getNums(i - 1)
}

let res = getNums(i);
console.log(res);
