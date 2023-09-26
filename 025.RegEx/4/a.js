/* 4. На вход подается строка в виде электронной почты пользователя. Необходимо
написать регулярное выражение для данной строки. Если же строка подходит под
регулярное выражение, то вывести булевое true, в противном случае бросить
исключение и обработать

 */

let email = 'artem@gmail.com'


function isValidEmail(email) {
    try {
        if (!/^[a-zA-Z0-9.-]+\@[a-z]+\.[a-z]{1,5}$/gm.test(email)) throw new Error('not valid email')
        return true
    } catch (error) {
        return error.message
    }
}

let res =isValidEmail(email);
console.log(res);