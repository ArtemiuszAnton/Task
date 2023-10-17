// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.


// class Validator {
//     url;
//     isURL = () => {
//         try {
//             if(!/^(https|http)\:\/\/[a-z]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('not valid URL')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator();
// validator.url = 'https://github.com'
// validator.isURL()

//---------------------------------------------------------------

// class Validator {
//     url;

//     constructor(url) {
//         this.url = url
//     }
//     isURL = () => {
//         try {
//             if (!/^(https|http)\:\/\/[a-z]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('not valid URL')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('https://github.com');
// validator.isURL()

//---------------------------------------------------------------

class Validator {
    url = 'https://github.com';

    isURL = () => {
        try {
            if (!/^(https|http)\:\/\/[a-z]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('not valid URL')
            else console.log(true);
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator();
validator.isURL()

//---------------------------------------------------------------

// class Validator {

//     isURL = (url)=> {
//         try {
//             if (!/^(https|http)\:\/\/[a-z]+\.[a-z]{1,5}$/gm.test(url)) throw new Error('not valid URL')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator();
// validator.isURL('https://github.com')