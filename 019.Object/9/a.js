/* На входе статичный объект. Необходимо посчитать количество пар (ключ:
значение) где значение число и вывести количество 

 */

let obj = {
    a: 23,
    b: 'rex',
    c: 44,
    d: 55,
    e: 'tel'
}
res = 0

for (const key in obj) {
    if (!isNaN(obj[key])) {
        res ++
    }
}
console.log(res);