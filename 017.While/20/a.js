/* Пользователь вводит многозначное число. Необходимо вставить двоеточие
между двумя нечетными числами. Работать с числом как с массивом.
Использовать for
55639217 -> 5:563:921:7
*/
let num = [5, 5, 6, 7, 3, 8, 4, 5, 6, 7, 9, 5];
let res = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0 && num[i + 1] % 2 != 0) {
        res.push(num[i] + ':')
    } else {
        res.push(num[i])
    }

}
console.log(res.join(''));