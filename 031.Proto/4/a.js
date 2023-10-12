/* 4. По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
CamelCase (примерСтрокиВCamelCase )
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');


btn.addEventListener('click', () => {
    let res = ''
    for (let i = 0; i < inp.value.length; i++) {
        if (inp.value[i] == ' ') continue
        if (inp.value[i - 1] == ' ') {
            res += inp.value[i].toUpperCase()
            continue
        }
        res += inp.value[i]
    }
    p.textContent = res
})