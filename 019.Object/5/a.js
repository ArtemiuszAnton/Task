/*На входе статичный объект. Необходимо сформировать массив из всех нечетных
ключей объекта

 */

const obj = {
        1: 24,
        2: 33,
        3: 44,
        4: 55,
        5: 66,
}

 let arr = []

for (const key in obj) {
        if (obj[key] % 2 !== 0) {
arr.push(obj[key])
        }
}
console.log(arr);