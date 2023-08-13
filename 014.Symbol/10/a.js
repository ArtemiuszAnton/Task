/* Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых. */

let a = +prompt();
let aKor = Math.sqrt(a);
console.log('Целое: ' + Math.floor(aKor) + '; Десятые: ' + aKor.toFixed(1) + '; Сотые: ' + aKor.toFixed(2));
