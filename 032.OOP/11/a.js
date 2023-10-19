/* 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
телефона.

 */

// class Validator {
//     phone;
//     constructor(phone) {
//         this.phone = phone
//     }
//     isPhone = () => {
//         try {
//             if (!/^(\+\d{1,3}\s?)?(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4})$/gm.test(this.phone)) throw new Error('not valid number of tel');
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator("+48666644444");
// validator.isPhone();

// ----------------------------------------------------------------

// class Validator {
//     phone;

//     isPhone = () => {
//         try {
//             if (!/^(\+\d{1,3}\s?)?(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4})$/gm.test(this.phone)) throw new Error('not valid number of tel');
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator();
// validator.phone = '+48777555666'
// validator.isPhone();

//-------------------------------------------------------------------

// class Validator {
//     phone = '+48777555666';

//     isPhone = () => {
//         try {
//             if (!/^(\+\d{1,3}\s?)?(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4})$/gm.test(this.phone)) throw new Error('not valid number of tel');
//             else console.log(true);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator();
// validator.isPhone();

//-------------------------------------------------------------------

class Validator {

    isPhone = (phone) => {
        try {
            if (!/^(\+\d{1,3}\s?)?(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4})$/gm.test(phone)) throw new Error('not valid number of tel');
            else console.log(true);
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator();
validator.isPhone('+37577555666');