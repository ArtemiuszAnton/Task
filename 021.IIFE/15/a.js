/* Напишите функцию, генерирующую пароль из 8 символов с использованием
замыкния. (Math.random)
 */

function getPass() {
    let str = '';
    return () => {
        str += Math.floor(Math.random() * 9);
        console.log(str);
    }
}

let res = getPass()


res()
res()
res()
res()
res()
res()