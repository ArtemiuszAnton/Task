/* 1. Классы Employee и ProductionWorker.
Напишите класс Employee (Сотрудник), который содержит:
• имя сотрудника;
• номер сотрудника.
Затем напишите класс ProductionWorker (Рабочий), который является подклассом
класса Employee.
Класс ProductionWorker содержит:
• номер смены (целое число, к примеру, 1, 2 или 3);
• ставка почасовой оплаты труда.
Напишите методы получатели и методы-модификаторы для каждого класса.
После того как эти классы будут написаны, напишите программу, которая создает
объект класса ProductionWorker и предлагает пользователю ввести данные по
каждому атрибуту данных этого объекта. Сохраните данные в объекте и
примените в этом объекте методы получатели, чтобы получить эти данные и
вывести их на экран. 
 */

class Employee {
    name;
    num;
    setName(name) {
        this.name = name;
    }

    setNum(num) {
        this.num = num
    }

    getName(){
        return this.name
    }
    getNum(){
        return this.num
    }
}

class ProductionWorker extends Employee {
    shiftNum
    hourlyRate
    setShiftNum(shiftNum) {
        this.shiftNum = shiftNum
    }
    
    setHourlyRate(hourlyRate) {
        this.hourlyRate = hourlyRate
    }
}

const productionWorker = new ProductionWorker();
productionWorker.setName('Artem')
productionWorker.setNum('1')
productionWorker.setShiftNum('2')
productionWorker.setHourlyRate('30')
console.log(productionWorker.getName());
console.log(productionWorker.getNum());
console.log();
console.log();