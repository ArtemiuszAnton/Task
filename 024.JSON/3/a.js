/* 
 3. Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
на числа. Далее вывести только те числа, которые кратны 3

 */

const str = `[1, 23, 4, 5, "erfe"]`;

function parsingData(str) {
    const parsing = JSON.parse(str);
    let res = parsing.some(el => (isNaN(el)))
    try {
        if (res) {
            throw new Error('есть строка');
        }
        return parsing.filter(function (el) {
            if (el % 3 === 0) return true
        });
    } catch (error) {
        return error.message
    }

}

let res = parsingData(str)