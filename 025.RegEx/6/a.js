/* 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
выражение для данной строки. Если же строка подходит под регулярное
выражение, то вывести булевое true, в противном случае бросить исключение и
обработать
C:\Users\Admin\Desktop\test.txt -> true
C:/Users/Admin/Desktop/test.txt -> true
 */

const path = 'C:\\Users\\Admin\\Desktop\\test.txt';

function checkPath(path) {
    try {
        if(!/^[A-Z]\:\\[\w]+(\\|\/)[\w]+(\\|\/)[\w]+(\\|\/)[\w]+\.[a-z]{2,5}$/gm.test(path)) throw new Error('not valid path');
        return true
    } catch (error) {
        return error.message
    }
}
let res = checkPath(path);
console.log(res);