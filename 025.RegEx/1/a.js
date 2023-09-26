/* 1. На вход подается строка в виде числа. Необходимо написать регулярное
выражение. Если строка состоит только из чисел, то вывести булевое true, в
противном случае бросить исключение и обработать
 */

let str = '2323';

function checkNums(str) {
    try {
        if(!/^(\+|\-)[-0-9]+$/gm.test(str)) throw new Error('not a num')
        return true
    } catch (error) {
        return error.message
    }
}

let res =checkNums(str);
console.log(res);