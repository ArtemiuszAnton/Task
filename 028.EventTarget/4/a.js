/* 4. По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
границы кнопки сновка скрывать

 */

const btn = document.querySelector('button');
const p = document.querySelector('p');


btn.addEventListener('mousemove', ()=> {
    p.textContent = 'HI'
})

btn.addEventListener('mouseout',()=>{
    p.textContent = ''
})
