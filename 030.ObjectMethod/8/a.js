/* 1. На вход подается число. Необходимо каждое значение возвести в степень
индекса и вычислить сумму. 12345 = 1
0+2
1+3
2+4
3+5
4
*/


const num = '12345';

function updateNum(num) {
    try {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += num[i] ** i
        }
        return sum
    } catch (error) {
        return error.message
    }
}

let res = updateNum(num);
console.log(res);