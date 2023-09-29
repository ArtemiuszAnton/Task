/* 10. На вход подается строка в виде электронной почты пользователя. Необходимо
найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
случае бросить исключение и его обработать
 */

let email = 'artem25@gmail.com';

function isValidEmail(email){
    if (email.includes('@')) return true 
    else throw new Error('not valid email');
}

let res = isValidEmail(email);
console.log(res);

