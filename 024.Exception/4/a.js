/* 4. Дана строка массива. Необходимо спарсить строку. Если же после того как вы
спарсили данные у вас не массив – бросить исключение. Вывести
те элементы массива, id котрых – четное значение
 */

let str = `[
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ]`

function isValidArr(str) {
    if (!Array.isArray(str)) throw new Error('this not array');
    let res = str.every(el => {
        if (!isNaN(el.id)) return true
    })
    if (!res) throw new Error('id not number');
    return true
}

function getArr(str) {
    try {
        const parsing = JSON.parse(str);
        isValidArr(parsing);
        const res = parsing.filter(el => {
            if (el.id % 2 == 0) return true
        })
        return res
    } catch (error) {
        return error.message
    }
}


const res = getArr(str);
console.log(res);

