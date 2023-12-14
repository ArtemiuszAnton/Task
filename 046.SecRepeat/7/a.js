/* 7. Допишите функционал регистрации. Небезопасно хранить в БД пароль в
пользовательском виде. Необходимо написать алгоритм шифрования с помощью
шифра Цезаря.
Задание: На сервер подается объект с ключом pwd, как и сделано в предыдущем
задании. Пароль – строка текста на английском языке, в которой нужно
зашифровать все слова. Каждое слово строки следует зашифровать с помощью
шифра Цезаря (циклического сдвига на длину этого слова). Буквы верхнего и
нижнего регистров при этом не изменяют свой первоначальный регистр */

let pwd = 'ArtemPrivetPwd';
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let hashPwd = '';
    let doHash = '';
for (let i = 0; i < pwd.length; i++) {
    doHash = pwd[i];
    if (doHash) {
         for (let index = 0; index < alph.length; index++) {
            if(alph[index] == doHash.toLowerCase()){
                hashPwd += (doHash == alph[index].toLowerCase()) ? alph[index + 3].toLowerCase() : alph[index + 3].toUpperCase();
            } 
        }
    }
    
}




console.log(hashPwd)




// class Client {
//     doRegistration() {
//         const login = document.querySelector('#login');
//         const pwd = document.querySelector('#pwd');
//         const btn = document.querySelector('button');

//         btn.addEventListener('click', () => {
//             let clientData = {
//                 email: login.value,
//                 pwd: pwd.value
//             }
//             const server = new Server();
//             server.controller(clientData);
//             console.log(server.controller(clientData));
//         })
//     }
// }

// class Server {
//     controller(clientData) {

//         try {
//             let ser = this.service(clientData);
//             return ser;
//         } catch (error) {
//             return error.message
//         }

//     }

//     service(clientData) {
        
//         let rep = this.repository(clientData);
//         return rep
//     }

//     repository(clientData) {
//         const data = [
//             { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
//             { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
//             { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
//             { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
//             { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
//         ];

//         const check = data.filter(el => el.email == clientData.email);
//         if (check.length) throw new Error('not unique');
//         data.push({ id: data.length + 1, ...clientData })
//         return data
//     }

// }

// const client = new Client();
// client.doRegistration();




