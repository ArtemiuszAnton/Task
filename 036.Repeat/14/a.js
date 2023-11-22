/* 14. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
класс Customer, который является подклассом класса Person. Класс Customer
должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
класса Customer вызвав геттеры и сеттеры собственного класса и базового
 */

class Person {
    name;
    surname;
    setPerson(name, surname) {
        this.name = name
        this.surname = surname
    }
    getPerson() {
        return `${this.surname} ${this.name}`
    }
}

class Customer extends Person {
    phone;
    setPerson(name, surname, phone) {
        this.name = name
        this.surname = surname
        this.phone = phone
    }

    getPerson() {
        return `${this.surname} ${this.name} ${this.phone}`
    }
}

const customer = new Customer();
customer.setPerson('artem', 'anton', 37532323232);
console.log(customer.getPerson()); 
