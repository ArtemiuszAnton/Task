/* 2. Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
значение инпута на «+375(29)111-11-11»
 */

let btn = document.querySelector("#btn");
let inp = document.querySelector('#inp')

btn.addEventListener('click', ()=>{
        inp.value = "+375(29)111-11-11"
})