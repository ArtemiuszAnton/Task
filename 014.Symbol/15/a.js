/* Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
fullstack => ua

 */

let str = 'fullstack';
let gl = 'eyuioa';
for (let i = 0; i < str.length; i++) {
    if (gl.includes(str[i])) {
        console.log(str[i]);
    }
}

//

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'e' || str[i] == 'y' || str[i] == 'i' || str[i] == 'u' || str[i] == 'a' || str[i] == 'o') {
        console.log(str[i]);
    }
}

//
let result = ''
for (let i = 0; i < str.length; i++) {
    if (gl.includes(str[i])) {
        result += str[i]
    }
}
console.log(result);