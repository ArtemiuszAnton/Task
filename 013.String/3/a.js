/* Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

 
 */

let str = prompt().toLowerCase().trim();
if (!isNaN(str)) {
    console.log(false);
} else {
    console.log(str.length);
}


if (!isNaN(str)) console.log(false);
else console.log(str.length);


!isNaN(str) ? console.log(false) : console.log(str.length);


console.log(!isNaN(str) ? false : str.length);