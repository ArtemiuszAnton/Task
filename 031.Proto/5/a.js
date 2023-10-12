/* 5. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
символов 1 строки есть в другой.
'rkqodlw', 'world‘ – true
'kacvtas', 'steak' – false

 */

const btn = document.querySelector('button');
const inp_1 = document.querySelector('#raz');
const inp_2 = document.querySelector('#dwa');
const p = document.querySelector('p');



btn.addEventListener('click', () => {
        try {
                let count = 0
                if (!inp_1.value || !inp_2.value) throw new Error('any inp is empty');
                for (let i = 0; i < inp_1.value.length; i++) {
                        if (inp_2.value.includes(inp_1.value[i])) count++
                }
                if (count >= 3) p.textContent = true
                else p.textContent = false
        } catch (error) {
                alert(error.message)
        }
})