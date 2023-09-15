/*13. Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает новый объект, где значения – исключительно числа
первоначального объекта. IIFE


 */

const obj = {
  id: 1,
  name: 'Artem',
  age: 23,
  number: 1232,
};


(function (obj) {
  const numsObj = {}
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      numsObj[key] = obj[key]
    }
  }
  console.log(numsObj);
}(obj))

