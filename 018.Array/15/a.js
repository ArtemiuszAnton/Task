/* Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
Cоздать новый массив, добавить туда значения всех массивов. Spread
 */

let arr_1 = [];
let arr_2 = [];

for (let i = 0; i < 6; i++) {

    if (i < 3) {
        arr_1.push(prompt())
    } else arr_2.push(prompt())

}
let nArr = [...arr_1,...arr_2]
console.log(nArr);