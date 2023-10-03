/* 
Записать в результат удвоенное значение инпута. Добавить проверки 

 */


let btn = document.querySelector('button');
let inp = document.querySelector('#inp');
let p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('input is empty');
        p.textContent = `Result: ` + inp.value * 2
    } catch (error) {
        alert(error.message)
    }
})