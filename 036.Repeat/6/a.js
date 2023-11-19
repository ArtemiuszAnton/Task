/* 6. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
проверку, что поле не пустое
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');

btn.addEventListener('click',()=>{
    try {
        if(!inp.value) throw new Error('input is empty');
        p.textContent += inp.value + ' '
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})




