// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false 

let str = prompt();
let strReverse = str.split('').reverse();
let strJoin = strReverse.join('');
if (str == strJoin) {
    console.log(true);
} else {
    console.log(false);
}