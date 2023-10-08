/* 6. Создайте форму для регистрации с полями ввода имени, email и пароля.
Реализуйте валидацию полей и отображение сообщений об ошибках при
некорректном вводе.
 */



const name = document.querySelector('#name')
const pwd = document.querySelector('#pwd')
const email = document.querySelector('#email')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    try {
        if (!name.value || !pwd.value || !email.value) throw new Error('any input is empty')
        if(!/^[\w]+@[a-z]+\.[a-z]{1,5}$/gm.test(email.value)) throw new Error('not valid email')
        if(!/^[\w]{8,}$/gm.test(pwd.value)) throw new Error('pass not good')
        if(!isNaN(name.value)) throw new Error('name not valid')
        alert('вы успешно зарегались')
    } catch (error) {
        alert(error.message)
    }
})


// function isValid(name, pwd, email) {

// }
// isValid(name, pwd, email)