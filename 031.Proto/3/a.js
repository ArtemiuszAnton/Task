/* 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
ключ – индекс элемента массива, а значение – текущее итерируемое значение
массива
[11, 2, 13] – {
0: 11,
1: 2,
2: 13
}


 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const pArr = document.querySelector('.arr');
const pObj = document.querySelector('.obj');
const arr = [];

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('error value')
        arr.push(inp.value)
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i]
        }
        pArr.textContent = arr
        pObj.textContent = JSON.stringify(obj)
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})