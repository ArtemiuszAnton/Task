/* . Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).
(b.isInteger) 
 */

let a = prompt();
let b = Math.sqrt(a);

if (b !== Math.floor(b)) {
    console.log (+(b.toFixed(2)));
} else {
    console.log(b);
}