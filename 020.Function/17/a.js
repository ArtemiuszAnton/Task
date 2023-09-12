/* 
. Написать функцию, принимающую в параметрах строку текста в маленьком
регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
элемент массива в чередование регистров toLowerCase, toUpperCase
hschool -> HsChOoL
 */

let str = 'hschool';


function changeStr(str) {
    const newArr = []
    str.split('').forEach((elem, index) => {
        if (index % 2 == 0) {
            newArr.push(elem.toUpperCase())
        } else {
            newArr.push(elem.toLowerCase())
        }
    });
    return newArr.join('')
}


const res = changeStr(str)
console.log(res);