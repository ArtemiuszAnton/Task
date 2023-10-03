/* 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0. Если
проверка true, то вывести в Результат ряд Фибоначчи. 
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');

btn.addEventListener('click', ()=>{
    try {
        if(!inp) throw new Error('inp is empty')
    } catch (error) {
        alert(error.message)
    }
})

