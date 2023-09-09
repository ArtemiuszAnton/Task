/*  На входе строка. Необходимо создать функцию, возвращающую true, если это
слово палиндром и false в противном случае

 */

const str = prompt();

function isValsidStr(str) {
    return isNaN(str) ? true : false
}

function checkStr(str) {
    let res = isValsidStr(str)
    if (res === true) {
        return str === str.split('').reverse().join('') ? true : false
    } else {
        return 'error'
    }
}

let res = checkStr(str);
console.log(res);
