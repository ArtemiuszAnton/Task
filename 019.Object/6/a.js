/* На входе статичный объект. Необходимо числовые значения удвоить на выходе
*/

const obj = {
    1: 333,
    2: 'ffff',
    3: 33,
    4: 3,
    5: 'rrer',

}

for (const key in obj) {
    if (!isNaN(obj[key])) {
        obj[key] *= 2
    }
}
console.log(obj);