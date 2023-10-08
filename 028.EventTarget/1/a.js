/* 1. На странице расположен маркированный список. Пользователь кликает на
каждый item списка. Необъодимо отловить на какой из элементов нажал
пользователь и отобразить
 */

let ul = document.querySelector('ul');
let p = document.querySelector('p')


ul.addEventListener('click', (event) =>  {
   p.textContent =  event.target.textContent
})
