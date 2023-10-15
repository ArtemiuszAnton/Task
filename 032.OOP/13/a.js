/* 13. Напишите алгоритм для нахождения факториала числа


 */


const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p')


btn.addEventListener('click', () => {
    try {
        if (isNaN(inp.value)) throw new Error('not number')
        if (!inp.value) throw new Error('inp is empty')
        let flag = 1
        for (let i = 1; i <= inp.value; i++) {
            flag *= i
        }
        p.textContent = flag
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }

})