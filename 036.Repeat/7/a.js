/* 7. Вывести в строчку все вводимые значения через инпут в виде массива, а также
все удвоенные значения данного массива в div ниже. Добавить проверку, что
поле не пустое */


;


function isValid(inp) {
    if (!inp.value) throw new Error('inp is empty');
}

document.querySelector('button').addEventListener('click', () => {
    let first = document.querySelector('.first');
    let second = document.querySelector('.second');
    let inp = document.querySelector('input');
    try {
        isValid(inp);
        first.innerHTML += inp.value;
        second.innerHTML += inp.value * 2
    } catch (error) {
        alert(error.message)
    }
})

