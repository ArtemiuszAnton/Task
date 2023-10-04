/* 11. По нажатию на кнопку поменять местами значения 2 инпутов. 
 */

let btn = document.querySelector('button');
let inp_1 = document.querySelector('#first');
let inp_2 = document.querySelector('#second');



btn.addEventListener('click', () => {
    try {
        if (!inp_1.value || !inp_2.value) throw new Error('anythink input is empty')
            let val = inp_2.value
            inp_2.value = inp_1.value
            inp_1.value = val
        

    } catch (error) {
        alert(error.message)
    }

})
