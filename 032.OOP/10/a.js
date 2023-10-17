/* 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату. 
 */

// class Validator {
//     date;
//     constructor(date) {
//         this.date = date
//     }
//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]$/gm.test(this.date)) throw new Error('not valid date')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('10.09.2009')
// validator.isDate()

//---------------------------------------------------------------

// class Validator {
//     date = '10.09.2001';

//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]$/gm.test(this.date)) throw new Error('not valid date')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// validator.isDate()

//----------------------------------------------------------------

// class Validator {
//     date;

//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]$/gm.test(this.date)) throw new Error('not valid date')
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// validator.date = '09.09.2002'
// validator.isDate()

//----------------------------------------------------------------

class Validator {

    isDate = (date) => {
        try {
            if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]$/gm.test(date)) throw new Error('not valid date')
            else console.log(true);
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator()
validator.isDate('09.09.2002')