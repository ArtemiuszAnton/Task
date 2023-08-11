/* Дана строка из 3 слов разделенных пробелом:
• Найдите количество символов в этой строке.
• Вырежите из нее 2 и 3 слова.
• Найдите индекс 2 подстроки

 */

let str = prompt('Введите три слова');
let SecThirWard = str.split(' ').slice([1]);
let backString = SecThirWard.join(' ');

console.log('Кол-во символов:', str.length, backString, str.indexOf(SecThirWard[0]));
