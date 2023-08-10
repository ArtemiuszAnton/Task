/* Ввести строку. Проверить является ли это число или строка. Если число, то
ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
Убрать лишние пробелы
 */



let str = prompt().trim();
if (isNaN(str)) {
    console.log(str[0].toUpperCase());
} else {
    console.log(false);
}




if (isNaN(str)) console.log(str[0].toUpperCase());
else console.log(false);




console.log(isNaN(str) ? str[0].toUpperCase() : false);





if (isNaN(str)) {
    console.log(str[0].toUpperCase() + str.slice(1));
} else {
    console.log(false);
}