// 8. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необходимо отловить на какой из элементов нажал
// пользователь и отобразить в div расположенном ниже маркированного списка

const list = document.querySelector('ul');
const p = document.querySelector('p');


list.addEventListener('click', (event) => {
    p.innerHTML = event.target.textContent
})
