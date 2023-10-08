/* 9. У вас есть кнопка. После каждого нажатия менять background
 */

const btn = document.querySelector('button');
let flag = false;


btn.addEventListener('click', () => {
    if (!flag) {
        flag = true
        btn.style = `background-color:#${Math.round(Math.random() * 999)}`

    } else {
        flag = false;
        btn.style = 'background-color:white'
    }


})