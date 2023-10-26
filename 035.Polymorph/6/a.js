/* 
6. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
сервер» (отправку запроса мы не проходили => просто вывести на экран
образовавщийся объект вида: {email: email, pwd: pwd}
*/

class Client {
    sendRequest() {
        let btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            let mail = document.querySelector('.email');
            let pwd = document.querySelector('.pwd');
            let p = document.querySelector('p');
            const data = {}
            data.email = mail.value
            data.pwd = pwd.value
            p.innerHTML = JSON.stringify(data)
        })
    }

}

const client = new Client();
client.sendRequest();