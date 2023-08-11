/* Пользователь вводит четырехзначное число. Напишите скрипт, который будет
выявлять является ли каждое составляющее числа четным либо нечетным.
Добавить проверку на ввод только чисел
1234 -> 1 – неч 2 – чет 3 – неч 4 – чет
 */

let FourNum = prompt().split('');
console.log(FourNum.join(''));
if (FourNum[0] % 2 == 0) {
    console.log(FourNum[0], '-', 'чет');
} else {
    console.log(FourNum[0], '-', 'неч');
}

//

if (FourNum[1] % 2 == 0) {
    console.log(FourNum[1], '-', 'чет');
} else {
    console.log(FourNum[1], '-', 'неч');
}

//

if (FourNum[2] % 2 == 0) {
    console.log(FourNum[2], '-', 'чет');
} else {
    console.log(FourNum[2], '-', 'неч');
}

//

if (FourNum[3] % 2 == 0) {
    console.log(FourNum[3], '-', 'чет');
} else {
    console.log(FourNum[3], '-', 'неч');
}

