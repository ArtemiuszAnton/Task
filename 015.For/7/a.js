/* 7. Преобразуйте первую букву строки в верхний регистр несколькими способами  */
let str = prompt()
console.log(str[0].toUpperCase() + str.slice(1));

let str1 = 'text'
let res = ''
for (i = 0; i < str1.length; i++) {
    if (i === 0) {

        res += str1[0].toUpperCase()
    } else {
        res+= str1[i]
    }
}
console.log(res);