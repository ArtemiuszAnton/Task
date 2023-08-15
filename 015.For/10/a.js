/* Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
введенные значения анаграммами */

let str1 = 'слот'.split('');
let str2 = 'стол'.split('');

if (str1.sort().join('') === str2.sort().join('')) {
    console.log(true);
} else {
    console.log(false);
}