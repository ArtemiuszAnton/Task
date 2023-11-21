/* 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0, а также,
добавить проверку на ввод только чисел. Если проверка true, то вывести в div
удвоенное значение инпута
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        if (inp.value < 0) throw new Error('num is not valid');
        if(isNaN(inp.value)) throw new Error('error: not num');
        else p.innerHTML = inp.value * 2
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})



