/* Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
вывести день для введенного числа.
1 -> Понедельник
 */

let a = +prompt();
if (a === 1) {
    console.log('Понедельник');
} else if (a === 2) {
    console.log('Вторник');
} else if (a === 3) {
    console.log('Среда');
} else if (a === 4) {
    console.log('Четверг');
} else if (a === 5) {
    console.log('Пятница');
} else if (a === 6) {
    console.log('Суббота');
} else if (a === 7) {
    console.log('Вск');
} else {
    console.log('Некоректный ввод');
}

switch (a) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вт');
        break;
    case 3:
        console.log('Ср');
        break;
    case 4:
        console.log('Чт');
        break;
    case 5:
        console.log('Пт');
        break;
    case 6:
        console.log('Сб');
        break;
    case 7:
        console.log('Вск');
        break;

}