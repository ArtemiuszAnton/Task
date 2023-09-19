/* 4. Отобразите четные числа от 5 до 0 по убываю используя рекурсию

 */

let i = 0;

function getNums(i) {
    if (i === 5) return '';
    if (i % 2 == 0) return `${i} ` + getNums(i + 1);
    else return getNums(i + 1)
}

let res =getNums(i);
console.log(res);