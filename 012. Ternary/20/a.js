/* Ввести строку. Проверить является ли это число или текст. Если число, то
выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
противном случае false
 */

let a = prompt();
if (isNaN(a) && a === 'hschool') {
    console.log(true);
} else if (typeof a !== 'string') {
    console.log('Вы ввели не текст');
} else {
    console.log(false);
}
