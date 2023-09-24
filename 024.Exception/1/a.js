/* На входе значение. Необходимо его обработать. Если это число и оно не является
четным, бросить исключение

 
 */

const num = prompt();

function checkNum(num) {
    try {
        if (isNaN(num)) throw new Error('Это не число');
        if (num % 2 != 0) throw new Error('Число нечетное');
        return true
    } catch (error) {
        return error.message
    }
}


let res = checkNum(num);
console.log(res);