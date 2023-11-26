/* 5. При наведении курсора на изображение, необходимо осуществить замену этого
изображения на другое.
 */

const img = document.querySelector('img');

img.addEventListener('mouseover',()=>{
    img.src = "../../../../Снимок экрана 2023-08-25 205359.png"
})

img.addEventListener('mouseout',()=>{
    img.src = "../../../../Снимок экрана 2023-10-24 213557.png"
})

