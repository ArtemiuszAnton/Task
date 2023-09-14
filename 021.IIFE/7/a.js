/* 5. Напишите функцию, которая принимает строку в виде пароля и проверяет,
является ли этот пароль надежным. Надежный пароль должен содержать хотя бы
одну заглавную букву, цифры, а его длина должна быть не менее 8 символов.


 */

let pass = 'ffff22ffffFass';

function isValidPass(pass) {
    let upper
    if (pass.length >= 8) {
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] !== pass[i].toLowerCase()) {
                upper = true
            }
        }
    }
    
    let findNum
    if (upper === true) {
        for (let i = 0; i < pass.length; i++) {
            if (!isNaN(pass[i])) {
                findNum = true
            }

        }
    }

    if (findNum === true) {
        return 'Ваш пароль надежный'
    } else {
        return 'Ваш пароль недостаточно надежный'
    }

}

let res = isValidPass(pass);
console.log(res);