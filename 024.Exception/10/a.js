/* На входе строка, необходимо убрать все лишние пробелы и привести каждый
элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
только текстовых значений
 */

let str = prompt('Введите текст:');
if (isNaN(str)) {
    let strAnoth = str.replaceAll(' ', '');
    console.log(strAnoth.repeat(3).toLowerCase());
} else {
    console.log(false);
}

