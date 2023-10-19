/*  2. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на почту. Вывести true, если провека успешна
 */

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p')

class DomHtml {
    constructor() {
        this.middleware()
    }

    middleware = () => {
        btn.addEventListener('click', () => {
            try {

                if (!/^[a-zA-Z0-9.-]+\@[a-z]+\.[a-z]{1,5}$/gm.test(inp.value)) throw new Error('not valid email')
                else p.textContent = 'true'
            } catch (error) {
                p.textContent = error.message
            }
        })


    }
}

const domhtml = new DomHtml()