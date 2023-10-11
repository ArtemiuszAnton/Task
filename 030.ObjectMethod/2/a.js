/*  2. У вас есть объект, представляющий собой список студентов и их оценок
(например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.keys() и Array.filter()
для фильтрации студентов, у которых оценки выше определенного порога.

*/

const obj = {
    Анна: 95,
    Иван: 88,
    Мария: 92
}

function isValid(val) {
    val.forEach((el) => {
        if (isNaN(el)) throw new Error('value is not valid')
    })
}

function filtStudents(obj, num) {
    try {
        let val = Object.values(obj)
        isValid(val);
        let res = val.filter((el) => {
            if (el > num) return el
        })
        if (res.length === 0) {
            throw new Error('ни одна из оценок не подходит под среднее')
        }
        return res
    } catch (error) {
        return error.message
    }

}

let fin = filtStudents(obj, 50);
console.log(fin);