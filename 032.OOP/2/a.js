/*  2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
соответствующие функции. Добавить проверки на ввод


 */

// class Calculator {
//     a = 10
//     b = 5
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }

//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }
//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }

//     getDevide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }

// const calculator = new Calculator()

// console.log(calculator.getSum());
// console.log(calculator.getMinus());
// console.log(calculator.getMultiply());
// console.log(calculator.getDevide());

// class Calculator {
//     a;
//     b;
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }

//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }
//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }

//     getDevide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }

// const calculator = new Calculator();
// calculator.a = 30;
// calculator.b = 10;

// console.log(calculator.getSum());
// console.log(calculator.getMinus());
// console.log(calculator.getMultiply());
// console.log(calculator.getDevide());


// class Calculator {
//     getSum = (a, b) => {
//         const res = a + b
//         return res
//     }

//     getMinus = (a, b) => {
//         const res1 = a - b
//         return res1
//     }
//     getMultiply = (a, b) => {
//         const res2 = a * b
//         return res2
//     }

//     getDevide = (a, b) => {
//         const res3 = a / b
//         return res3
//     }
// }

// const calculator = new Calculator();

// console.log(calculator.getSum(5,2));
// console.log(calculator.getMinus(6,9));
// console.log(calculator.getMultiply(43,4));
// console.log(calculator.getDevide(6,3));


class Calculator {
    MyA;
    MyB;

    constructor(a, b) {
        this.MyA = a
        this.MyB = b
    }

    getSum = () => {
        const res = this.MyA + this.MyB
        return res
    }

    getMinus = () => {
        const res1 = this.MyA - this.MyB
        return res1
    }
    getMultiply = () => {
        const res2 = this.MyA * this.MyB
        return res2
    }

    getDevide = () => {
        const res3 = this.MyA / this.MyB
        return res3
    }
}

const calculator = new Calculator(55, 33);

console.log(calculator.getSum());
console.log(calculator.getMinus());
console.log(calculator.getMultiply());
console.log(calculator.getDevide());