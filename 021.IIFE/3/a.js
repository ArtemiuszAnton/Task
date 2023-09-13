/* Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает
значение в обратном порядке ‘54321’. IIFE

 */

const str = '12345';

let res = (function () {
    return str.split('').reverse().join('');
}())

console.log(res);