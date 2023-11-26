/* 6. Вы вводите числа в поле для ввода формируя и отображая массив.
Необходимо в отдельный div вывести все числа кратные 3
 */


const p = document.querySelector('.first');
const arr_filt = document.querySelector('.second');
const btn = document.querySelector('button');
const inp = document.querySelector('input');
let array = [];
let arr_filter = [];

btn.addEventListener('click', () => {
    array.push(inp.value);
    p.innerHTML = array;
    if (inp.value % 3 == 0) arr_filter.push(inp.value);
    arr_filt.innerHTML = arr_filter;
})




