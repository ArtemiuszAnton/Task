/*  На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
значений на заполнение массива. filter
[“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

 */

let n = 4;
let array = []
for (let i = 0; i < n; i++) {
    array.push(prompt('Введите текст'))

}

let res = array.filter(function (elem) {
    if (elem.startsWith('a') || elem.startsWith('h')) {
        return true
    } else {
        return false
    }
})

console.log(res);