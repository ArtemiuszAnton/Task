/* 6. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
проверку, что поле не пустое
 */



const p = document.querySelector('p')
const btn = document.querySelector('button')
const inp = document.querySelector('input')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('inp is empty')
        else {
            const arr = []
            arr.push(inp.value)
            p.innerHTML += arr
        }
    } catch (error) {
        alert(error.message)
    }
})


