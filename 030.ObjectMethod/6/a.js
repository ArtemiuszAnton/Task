/* 6. Создайте функцию, которая принимает объект и имя свойства. Используйте
hasOwnProperty, чтобы проверить, существует ли данное свойство в объекте, и
вернуть соответствующее сообщение.
*/

const obj = {
    id: 1,
    name_: 'artem',
    age: 25
}

const str = 'id'

function findStr(obj, str) {
    try {
        let bool = obj.hasOwnProperty(str)
        if (bool) return true
        else throw new Error('error')
    } catch (error) {
        return error.message
    }


}

let res = findStr(obj, str);
console.log(res);