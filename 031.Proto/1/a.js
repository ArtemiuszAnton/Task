/* 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
этого массива
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');
const arr = [];

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('input is empty');
        arr.push(inp.value)
        let sum = arr.reduce((sum, elem) => {
            return sum + +elem
        }, 0)
        p.textContent = sum / arr.length
    } catch (error) {
        alert(error.message)
    }
})
