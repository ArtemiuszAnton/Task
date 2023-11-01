/* 15. Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
multArr, которая заполняет и возвращает массив из 5 рандомных элементов. Класс
ConsoleArray является производным по отношению к базовому, родительскому
NumberArray и содержит функцию multArr. Необходимо переопределить multArr
из базового класса записав в переменную используя метод super. Далее посчитать
произведение всех элементов массива используя reduce

 */

class NumberArray {
    multArr() {
        let arr = []
        for (let i = 0; i < 5; i++) {
            arr.push(Math.round(Math.random() * 9))
        }
        return arr
    }
}

class ConsoleArray extends NumberArray {
    multArr() {
        let res = super.multArr()
        let plus = res.reduce((el, sum) => {
            return el += sum
        }, 0)
        return plus

    }
}

const consoleArray = new ConsoleArray();
const numb = new NumberArray();
console.log(numb.multArr());
console.log(consoleArray.multArr()); 