/* 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
возвращающий корень числа принимаемого в параметрах

 */

class Calculator {
    n
    constructor(n) {
        this.n = n
    }
    doSqrt() {
        return Math.sqrt(this.n)
    }
}

const calculator = new Calculator(144)
console.log(calculator.doSqrt());