/* Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
всех чисел до введенного
 */

let mas = [3, 5, 6, 7, 8, 9];
let num = 4;
let isHere = false;
for (let i = 0; i < mas.length; i++) {
    if (num === mas[i]) {
        isHere = true;
        break
    }

}
if (isHere === true) {
    console.log('Число найдено и цикл остановлен');
} else {
    let result = 0;
    for (let i = 0; i < mas.length; i++) {
        result += mas[i]
    }
    console.log(result);
}

