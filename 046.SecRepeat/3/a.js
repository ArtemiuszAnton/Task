/* 
3. Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
содержащие по 1 обработчику события в каждом из методов. HTML разметка
содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
кнопку button с текстом -1. Задача:
• По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
• По клику с текстом на кнопку -1 необходимо отнять из счетчика -1. 
 */

class HTML {
    bindOptionPlus() {
        const btn_plus = document.querySelector('.plus');
        const p = document.querySelector('p');
        btn_plus.addEventListener('click', () => {
            p.innerHTML++
        })
    };

    bindOptionMinus() {
        const btn_minus = document.querySelector('.minus');
        const p = document.querySelector('p');
        btn_minus.addEventListener('click', () => {
            p.innerHTML--
        })
    }
}

const html = new HTML();
html.bindOptionPlus();
html.bindOptionMinus();