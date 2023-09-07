/* Напишите функцию, которая принимает статичный массив строк. Необходимо
отфильтровать значения и оставить только те, где длина строк до 2 символов.
[“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

 */

const arr = ['by', 'belarus', 'de', 'ru', 'germany']

function filterArr() {
    let filt = arr.filter(function (el) {
        if (el.length <= 2) {
            return true
        }
    })
return filt
}

let res = filterArr(arr);
console.log(res);