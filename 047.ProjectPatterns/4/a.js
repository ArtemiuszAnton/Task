/* 
4. У вас есть 3 инпута. Необходимо вывести в div результат конкатенацию всех
инпутов по клику на кнопку
 */

const raz = document.querySelector('#raz');
const dwa = document.querySelector('#dwa');
const tri = document.querySelector('#tri');
const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        if (!raz.value || !dwa.value || !tri.value)
            throw new Error('any input is empty');
        else  p.innerHTML = `${raz.value} ${dwa.value} ${tri.value}`
    } catch (error) {
        alert(error.message)
    }
})