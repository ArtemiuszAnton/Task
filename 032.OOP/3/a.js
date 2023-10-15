/* 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
где первая буква заглавная и метод upperEvery, который делает заглавной первую
букву каждого слова этой строки.
 */

// class WordString {
//     myStr;
//     constructor(str) {
//         this.myStr = str
//     }
//     reversString = () => {
//         return this.myStr.split('').reverse().join('')
//     }

//     upperFirst = () => {
//         return this.myStr[0].toUpperCase() + this.myStr.slice(1)
//     }

//     upperEvery = () => {
//         let newStr = [];
//         let str1 = this.myStr.split(' ')
//         for (let i = 0; i < str1.length; i++) {
//             newStr.push(str1[i][0].toUpperCase() + str1[i].slice(1)) 
//         }
//         return newStr.join(' ')
//         // return this.myStr.split(' ').map((el) => {
//         //     if (!el.length) return el
//         //     return el[0].toUpperCase() + el.slice(1)
//         // }).join(' ')
//     }
// }

// const wordstring = new WordString('hello world');
// console.log(wordstring.reversString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());

class WordString {
    // myStr='hello, world';

    reversString = (str) => {
        return str.split('').reverse().join('')
    }

    upperFirst = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    upperEvery = (str) => {
        let newStr = [];
        let str1 = str.split(' ')
        for (let i = 0; i < str1.length; i++) {
            newStr.push(str1[i][0].toUpperCase() + str1[i].slice(1))
        }
        return newStr.join(' ')
        // return this.myStr.split(' ').map((el) => {
        //     if (!el.length) return el
        //     return el[0].toUpperCase() + el.slice(1)
        // }).join(' ')
    }
}

const wordstring = new WordString();
console.log(wordstring.reversString('hello world'));
console.log(wordstring.upperFirst('hello world'));
console.log(wordstring.upperEvery('hello world'));