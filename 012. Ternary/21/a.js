/* Пользователь вводит строку. Применить метод для разбития строки на массив.
Добавить проверку на ввод только текста
 */

let hai = prompt('Введите текст');
let massiveText = [...hai]

if (typeof hai !== 'string'){
    console.log(false);
} else {
    console.log(massiveText);
}