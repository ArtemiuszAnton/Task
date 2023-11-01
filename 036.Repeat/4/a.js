/* 
4. На входе статичный объект. Написать функцию на формирование массива
значений данного объекта

 */

const obj ={
    id: 1,
    name: 'artem',
    age: 25
}

function doArr(obj) {
 return Object.values(obj)
}

let res = doArr(obj)
console.log(res);