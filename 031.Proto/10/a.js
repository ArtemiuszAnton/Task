/* Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
значения массива -> [1, 5] (for)
 */
let array = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let res = []
for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i + 1] && array[i] != array[i - 1]) {
        res.push(array[i]);
    }

}
console.log(res);