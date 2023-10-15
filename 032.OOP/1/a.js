/* 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
surname. Также класс должен иметь метод getAutograph, который будет выводить
“{name} {surname), с наилучшими пожеланиями”. 
 */

// class Singer {
//     name = 'Artem';
//     surname = 'Anton';
//     getAutograph = () => {
//         return `${this.name} ${this.surname}`
//     }
// }

// const singer = new Singer();
// console.log(singer.getAutograph());

// class Singer {
//     name;
//     surname;
//     getAutograph=()=>{
//         return `${this.name} ${this.surname}`
//     }
// }

// const singer = new Singer();
// singer.name = 'Artem';
// singer.surname = 'Anton';

// console.log(singer.getAutograph());

class Singer {
    myName;
    mySurname;

    constructor(name, surname) {
        this.myName = name
        this.mySurname = surname
    }
    getAutograph = () => {
        return `${this.myName} ${this.mySurname}`
    }
}

const singer = new Singer('artem', 'anton');
console.log(singer.getAutograph());