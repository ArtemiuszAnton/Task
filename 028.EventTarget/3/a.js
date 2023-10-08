/* 
3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
должен показываться или скрываться.
 */

let btn = document.querySelector('button');
let p = document.querySelector('p');
let flag = false

// btn.addEventListener('click', () => {
//     if (btn.textContent == 'Показать') {
//         p.textContent = 'HI';
//         btn.textContent = 'Скрыть'
//     } else {
//         p.textContent = '';
//         btn.textContent = 'Показать' 
//     }

// })


btn.addEventListener('click',()=>{
    if(!flag) {
    p.style ='visibility: hidden'
    flag = true;
    btn.textContent = 'Показать'

    } else {
        p.style = 'visibility: visable'
        btn.textContent = 'Скрыть'
        flag = false
    }
})

