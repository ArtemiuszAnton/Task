/* На вход программе подаётся строка. Замените все @ на '!' (2 способа)
 */

let str = prompt().trim();
console.log(str.replaceAll('@', '!'));

let spl = str.split('@');
console.log(spl.join('!'));


