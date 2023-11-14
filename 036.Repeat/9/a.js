/* 9. Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
распознать по какому из значений контейнера производится событие клика. Если
клик происходит, то удалить данное значение из массива в div
 */

document.querySelector('button').addEventListener('click', () => {
    const p = document.querySelector('p');
    const div = document.querySelector('div')
    const arr = [];
    const nArr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.round(Math.random() * 100))
    }

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = arr[i]
        p.appendChild(li)
    }
    p.addEventListener('click', (event) => {
        p.removeChild(event.target)
        nArr.push(event.target.textContent)
        div.innerHTML = nArr
    })
})



