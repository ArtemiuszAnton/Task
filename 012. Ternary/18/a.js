/* Пользователь вводит строку. Необходимо сделать проверку, что это не число и
вывести текущую строку в большом регистре
 */

let a = prompt('Введите текст');
let aUpperCase = a.toUpperCase();
if (isNaN(a)) {
    console.log(aUpperCase);
} else {
    console.log('Вы ввели число');
}
