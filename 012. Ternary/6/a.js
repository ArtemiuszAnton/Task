/* Найти квадратный корень числа. Если же число без плавающей точки, то просто
вывести его. В противном случае необходимо округлить число до целых. Добавить
проверку на ввод только чисел

 */

let a = prompt();
let sqrt = Math.sqrt(a);
if (isNaN(a)) {
    console.log('Error');
} else if (Number.isInteger(sqrt)) {
    console.log(sqrt);
} else {
    console.log(Math.floor(sqrt));
}
