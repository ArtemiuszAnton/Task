/*  Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает количество пар ключ / значение. IIFE

 */

const obj = {
    id: 1,
    name: 'Artem',
    age: 25,
    number: 666,
};

let res = (function (obj) {
    let count = 0;
    for (const key in obj) {
       if (obj[key]) {
        count++
       }
    }
return count
}(obj))
console.log(res);