//8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.



// class Validator {
//    email = 'vasya.pupkin@gmai.com'
//    isEmail = () => {
//       try {
//          if (!/^[a-zA-Z0-9.-]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.email)) throw new Error(false)
//          else console.log(true);
//       } catch (error) {
//          console.log(error.message);
//       }
//    }
// }

// let validator = new Validator()
// console.log(validator.isEmail());

class Validator {
   MyEmail;
   constructor(email) {
      this.MyEmail = email
   }
   isEmail = () => {
      try {
         if (!/^[\w.-]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.MyEmail)) throw new Error(false)
         else console.log(true);
      } catch (error) {
         console.log(error.message);
      }
   }
}

let validator = new Validator('artem.anton@gmail.com')
validator.isEmail();