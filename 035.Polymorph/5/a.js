/* 5. Реализуйте Validation – производный класс, базовый – StringValue.
Класс StringValue состоит из: свойствa value в конструкторе;
Класс Validation наследует value в конструкторе при помощи метода super и
дополнительно принимает и дополняет конструктор свойством: confirmValue;
класс Validation включает метод checkValue(), который проверяет, что
передаваемое значение value в конструктор – строка и состоит из букв. Также
добавить проверку на равенство value и confirmValue
Необходимо вызвать метод checkValue экземпляра validation  */


class StringValue {
    value;
    constructor(value) {
        this.value = value
    }

}

class Validation extends StringValue {
    confirmValue;
    constructor(value, confirmValue) {
        super(value);
        this.confirmValue = confirmValue;
    }
    checkValue() {
        try {
            if (!isNaN(this.value)) throw new Error('u have num in value');
            if (this.value != this.confirmValue) throw new Error('dont match');
            else return true
        } catch (error) {
            return error.message
        }
    }
}

const valid = new Validation('3333', 'password');

console.log(valid.checkValue());