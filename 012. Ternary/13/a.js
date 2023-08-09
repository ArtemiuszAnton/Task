/* Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
задачу через switch-case. 
 */

let a = 8658;
let numA = a.toString();
function ss() {


    if (parseInt((numA[0]) % 2 === 0)) {
        console.log('чет');
    } else {
        console.log('нечет');
    }
}


function bb() {
    if (parseInt(numA[1] % 2 === 0)) {
        console.log('чет');
    } else {
        console.log('нечет');
    }
}

function xx() {
    if (parseInt(numA[2] % 2 === 0)) {
        console.log('чет');
    } else {
        console.log('нечет');
    }
}

function aa() {
    if (parseInt(numA[0]%3===0)) {
        console.log('чет');
    } else {
        console.log('нечет');
    }
}

console.log(ss(), bb(), xx(), aa());