/* 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0. Если
проверка true, то вывести в Результат ряд Фибоначчи. 
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp) throw new Error('inp is empty');
        arr = [0, 1]
        for (let i = 2; i <= inp.value; i++) {
            arr.push(arr[i] = arr[i - 1] + arr[i - 2])

        }
        p.innerHTML += arr
    } catch (error) {
        alert(error.message)
    }
})

