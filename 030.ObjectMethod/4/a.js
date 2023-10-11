/* 4. Создайте функцию, которая принимает объект и строку (имя свойства) и
возвращает true, если такое свойство существует в объекте, и false, если нет,
используя Object.keys().
 */

const obj = {
    id: 1,
    age: 25,
    name_: 'Artem'
}

let param = 'name_'

function checkObj(obj, param) {
    try {
        const val = Object.keys(obj)
        if (val.includes(param)) return true
        else return false
    } catch (error) {
        return error.meassage
    }
}

const res = checkObj(obj, param);
console.log(res);