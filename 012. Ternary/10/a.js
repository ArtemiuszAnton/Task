/* Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
задачу через switch-case. 
 */

let a = +prompt('Введите число от 1 до 4');

if (isNaN(a)) {
    console.log(false);
} else if (a === 0) {
    console.log('Обратного числа не существует');
} else {
    console.log(1 / a);
}
