/* Пользователь вводит четырехзначное число. Напишите скрипт, который будет
выявлять является ли каждое составляющее числа четным либо нечетным.
Добавить проверку на ввод только чисел
1234 -> 1 – неч 2 – чет 3 – неч 4 – чет
 */

let FourNum = prompt();
let toStringFourNum = String(FourNum);
let firstSymb = toStringFourNum[0];
let secondSymb = toStringFourNum[1];
let thirdSymb = toStringFourNum[2];
let fourthSymb = toStringFourNum[3];
console.log(FourNum,'->', firstSymb, '->', secondSymb,'->', thirdSymb,'->',fourthSymb);
