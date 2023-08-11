/* На вход программе подается переменная date, в котрой лежит дата в формате
'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse) */

let date = 'xxxx-xx-xx'.replaceAll('-', '/');
let dateMassive = date.split('').reverse();
let dateJoin = dateMassive.join('');
console.log(dateJoin);