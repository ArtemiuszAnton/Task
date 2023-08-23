// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false 

let str = prompt().split('');
if (str.join('') == str.reverse().join('') ) {
    console.log(true);
} else {
    console.log(false);
}