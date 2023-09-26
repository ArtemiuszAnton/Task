/* 
 3. На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
пустую строку. 

 */

let str = 'raz dwa';

function replaceWords(str) {
    try {
        if (!/^[a-zA-Z]+\ [a-zA-Z]+$/gm.test(str)) throw new Error('not valid');
        return str.replaceAll(/\s/gm, '')
    } catch (error) {
        return error.message
    }
}

let res = replaceWords(str);
console.log(res);