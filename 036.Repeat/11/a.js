/* 11. Реализуйте класс WordString, который содержит: конструктор со входной строкой;
метод ReverseString(). Ваша задача перевернуть исходную строку 
 */

class WordString {
    str;
    setStr(str) {
        this.str = str
    }

    

    ReverseString() {
        return this.str.split('').reverse().join('')
        
    }
    getStr(){
        return this.str
    }
}

const wordString = new WordString();
wordString.setStr('raz')
let res = wordString.ReverseString();
console.log(wordString.getStr());
console.log(res);



