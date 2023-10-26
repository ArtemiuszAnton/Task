/* 12. Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
корректным email (Если является - возвращает true, если не является - false.
Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

 */

class Validator {
    email 
    setEmail(email) {
        this.email = email
    }
    getEmail() {
        return this.email
    }
    isEmail() {
        if (!/^[a-zA-Z0-9.-]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.email)) return false
        else return true
    }
}

const valid = new Validator();
valid.setEmail('aarara122@gmail.com');
console.log(valid.getEmail());
console.log(valid.isEmail());