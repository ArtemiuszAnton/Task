/* 3. Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
Worker состоит из: свойства name, свойства surname, метода getFullName(), с
помощью которого можно вывести одновременно имя и фамилию; Класс Singer
состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
информацию о певце: name, surname, years, birth, style. Необходимо вызвать
методы getFullName , getMoreInfo через класс Singer
 */

class Worker {
    name;
    surname;
    setName(name) {
        this.name = name
    }

    setSurname(surname) {
        this.surname = surname
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}


class Singer extends Worker {
    years;
    birth;
    style;

    getMoreInfo() {
        return `${this.getFullName()} ${this.years} ${this.birth} ${this.style}`
    }

    setYears(years) {
        this.years = years
    }

    setBirth(birth) {
        this.birth = birth
    }

    getYears() {
        return this.years
    }

    getBirth() {
        return this.birth
    }

    setStyle(style) {
        this.style = style
    }

    getStyle() {
        return this.style
    }
}

const singer = new Singer();
singer.setName('Vasya')
singer.setSurname('Pupkin')
singer.setYears('23')
singer.setBirth('23.11.2000')
singer.setStyle('Singer')

console.log(singer.getMoreInfo());