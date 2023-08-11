/* На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
заканчивается подстрокой .com или .ru, то вывести true, в противном случае false
 */

let url = prompt('Введите ссылку:');
let urlMassive = url.split('');
let RuCom = url.split('.')
if (url.startsWith('http') && urlMassive.includes('/')) {
    if (RuCom[RuCom.length - 1] === 'com' || RuCom[RuCom.length - 1] === 'ru'){
    console.log(true);
}
} else {
    console.log(false);
}
