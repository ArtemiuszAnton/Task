/* 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
для данной строки. Если же строка подходит под регулярное выражение, то
вывести булевое true, в противном случае бросить исключение и обработать
 */



const url = 'https://github.com';

function checkUrl(url) {
    try {
        if (!/^(https|http)\:\/\/[a-z]+\.[a-z]{1,5}$/gm.test(url)) throw new Error('url is not valid')
        return true
    } catch (error) {
        return error.message
    }
}
let res = checkUrl(url);
console.log(res);