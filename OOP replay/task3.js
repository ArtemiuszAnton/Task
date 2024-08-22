// 3. Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear), 
// которыйвозвращаетвозрастмашины.
//  Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
//  Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
//  Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge = (currentYear) => {
        const res = currentYear - this.year;
        return `Возраст машины: ${res} лет`
    }
}


const car = new Car('Opel', 'Meriva', 2005);
console.log(car.getCarAge(2024));
