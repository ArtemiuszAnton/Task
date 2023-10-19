/* 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide 
 */

const inp_1 = document.querySelector('#raz');
const inp_2 = document.querySelector('#dwa');
const btn = document.querySelector('button');
const plus = document.querySelector('.plus');
const min = document.querySelector('.min');
const mltpl = document.querySelector('.mltpl');
const dvd = document.querySelector('.dvd');

class DomHtml {
    constructor() {
        this.mainAction()
    }

    mainAction() {
        btn.addEventListener('click', () => {
            this.doPlus();
            this.doMinus();
            this.doMultiply();
            this.doDevide();
        })
    }

    doPlus = () => {
        plus.textContent += +inp_1.value + +inp_2.value
    }

    doMinus = () => {
        min.textContent += +inp_1.value - +inp_2.value
    }

    doMultiply = () => {
        mltpl.textContent += +inp_1.value * +inp_2.value

    }

    doDevide = () => {
        dvd.textContent += +inp_1.value / +inp_2.value

    }
}


const domhtml = new DomHtml();


