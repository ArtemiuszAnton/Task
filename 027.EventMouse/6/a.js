/* 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
кнопку заменить значение инпута

 */

let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');


btn.addEventListener('click',()=>{
    try {
       if(inp.value != '!!!') throw new Error('не корректный ввод');
       if(!inp.value) throw new Error ('empty value')
       inp.value = '???'
    } catch (error) {
        alert(error.message)
    }
}) 
   
    