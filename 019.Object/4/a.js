/* 4. На входе статичный объект. Необходимо вывести все четные значения объекта.

 */

const obj = {
    id: 2,
    age: 25,
    learn: 20,
};

for (const key in obj) {
    if (obj[key] % 2 === 0) {
        console.log(obj[key]);
    }
}
