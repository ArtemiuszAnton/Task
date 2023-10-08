/* 
7. Создайте форму с выпадающим списком для выбора единицы измерения
(например, дюймы, сантиметры, метры). При выборе единицы измерения
отображайте соответствующее значение.
 */


let btn = document.querySelector('button');
let div = document.querySelector('div');
let flag = false

btn.addEventListener('click', () => {
    if (!flag) {
        div.style = 'visibility: visible'
        flag = true
    } else {
        div.style = 'visibility: hidden'
        flag = false
    }
})

div.addEventListener('click', (event) => {
    btn.textContent = event.target.textContent
    div.style = 'visibility: hidden'
    // flag = false
})