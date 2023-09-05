/* На входе массив чисел. На основе этого массива сформировать объект, где ключ –
число массива, значение – true/false. True – число четное, false – нечетное 
 */

let arr = [2, 3, 4, 5, 6, 7, 22, 45];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        obj[arr[i]] = true
    } else {
        obj[arr[i]] = false

    }
}
console.log(obj);