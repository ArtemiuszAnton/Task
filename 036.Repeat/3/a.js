/* 
3. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
проверки

 */

const obj = {
    id: 1,
    name: 'artem',
    age: 25
}


function isValid(count) {
    if (count == 0) throw new Error('invalid');
    return true
}

function countKeys(obj) {
    try {
        let count = 0;
        for (const key in obj) {
            count++
        }
        let bool = isValid(count)
        return count
    } catch (error) {
        return error.message
    }

}

const res = countKeys(obj);
console.log(res);
