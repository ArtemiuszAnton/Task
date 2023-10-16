/* 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
если слова являются анаграммами. Добавить проверки на ввод

 */

// class Anagram {
//     first;
//     sec;

//     validAnagram = (first, sec) => {
//         try {
//             if(!isNaN(first || sec)) throw new Error('not valid')
//             if (first.split('').sort().join('') == sec.split('').sort().join('')) return true
//             else return false 
//         } catch (error) {
//             return error.message
//         }

//     }
// }

// let anagram = new Anagram;
// console.log(anagram.validAnagram('rake', 'aker'));

// -------------------------------------------------------------------------

// class Anagram {
//     first = 'akr';
//     sec = 'rak';

//     

//     }
// }

// let anagram = new Anagram;
// console.log(anagram.validAnagram());

// --------------------------------------------------------------------------

// class Anagram {
//     MyFirst;
//     MySec;

//     constructor(first, sec) {
//         this.MyFirst = first
//         this.MySec = sec
//     }

//     validAnagram = () => {
//         try {
//             if (!isNaN(this.MyFirst || this.MySec)) throw new Error('not valid')
//             if (this.MyFirst.split('').sort().join('') == this.MySec.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// let anagram = new Anagram('rake', 'aker');
// console.log(anagram.validAnagram());

// -------------------------------------------------------------------------

class Anagram {
    first;
    sec;

    validAnagram = () => {
        try {
            if(!isNaN(this.first || this.sec)) throw new Error('not valid')
            if (this.first.split('').sort().join('') == this.sec.split('').sort().join('')) return true
            else return false 
        } catch (error) {
            return error.message
        }

    }
}

let anagram = new Anagram;
anagram.first = 'akr';
anagram.sec = 'rak'
console.log(anagram.validAnagram());