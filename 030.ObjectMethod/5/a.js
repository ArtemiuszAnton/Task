/* 5. Создайте функцию, которая принимает объект и возвращает массив всех его
значений, используя Object.values().
 */

const obj = {
        id:1,
        nam: 'art',
        age: 25
}

let res = Object.values(obj);
console.log(res)