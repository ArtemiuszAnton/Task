/*  На входе число. Необходимо создать функцию, возвращающую факториал числа
4! = 1 * 2 * 3 * 4

 */

let num = 4;


function factoringNum(num) {
    let factNum = 1
    for (let i = 1; i <= num; i++) {
        factNum *= i
    }
    return factNum
}

let fin = factoringNum(num);
console.log(fin);