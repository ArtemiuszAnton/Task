/* 2. Классы Person и Customer. Напишите класс Person с атрибутами данных для
имени, адреса и телефонного номера человека. Затем напишите класс Customer
(Клиент), который является подклассом класса Person. Класс Customer должен
иметь поле для номера клиента и атрибут булевых данных,
указывающий, хочет ли клиент быть в списке рассылки или нет.
Продемонстрируйте методы получатели и модификаторы экземпляра класса
Customer
 */

class Person {
    name;
    adres;
    phoneNum;

    setName(name) {
        this.name = name
    }

    setAdres(adres) {
        this.adres = adres
    }

    setPhoneNum(phoneNum) {
        this.phoneNum = phoneNum
    }

    getName() {
        return this.name
    }

    getAdres() {
        return this.adres
    }

    getPhoneNum() {
        return this.phoneNum
    }
}

class Customer extends Person {
    clientPhone;
    isValid;

    setClientNum(clientPhone) {
        this.clientPhone = clientPhone
    }    

    setIsValid(isValid){
        this.isValid = isValid
    }

    getClientNum() {
        return this.clientPhone
    }    

    getIsValid(){
        return this.isValid
    }
}

const customer = new Customer();
customer.setName('Artem');
customer.setPhoneNum('123456789');
customer.setAdres('waw');
customer.setClientNum('121121212')
customer.setIsValid(true);

console.log(customer.getName());
console.log(customer.getPhoneNum());
console.log(customer.getAdres());
console.log(customer.getClientNum());
console.log(customer.getIsValid());
