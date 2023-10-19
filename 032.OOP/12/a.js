/* 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
массива. На основании числа формируется динамический массив из n элементов
внутри класса. Создать функцию doHashtag, заполняющую новый массив из
элементов, каждое значение которого имеет вид #name
 */

// class Hashtag {
//     n = Math.floor(Math.random() * 5)

//     doHashtag = () => {
//         let arr = [];
//         for (let i = 0; i < this.n; i++) {
//             arr.push('#' + prompt('введите name hashtage'))
//         }
//         console.log(arr);
//     }
// }

// const hashtag = new Hashtag()
// hashtag.doHashtag()

//---------------------------------------------------------------------

// class Hashtag {
//     n;

//     constructor(n) {
//         this.n = n
//     }

//     doHashtag = () => {
//         let arr = [];
//         for (let i = 0; i < this.n; i++) {
//             arr.push('#' + prompt('введите name hashtage'))
//         }
//         console.log(arr);
//     }
// }

// const hashtag = new Hashtag(Math.floor(Math.random() * 5))
// hashtag.doHashtag()

//---------------------------------------------------------------------


// class Hashtag {
//     n;

   
//     doHashtag = () => {
//         let arr = [];
//         for (let i = 0; i < this.n; i++) {
//             arr.push('#' + prompt('введите name hashtage'))
//         }
//         console.log(arr);
//     }
// }

// const hashtag = new Hashtag()
// hashtag.n = Math.floor(Math.random() * 5)
// hashtag.doHashtag()

//----------------------------------------------------------------------

class Hashtag {   
    doHashtag = (n) => {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push('#' + prompt('введите name hashtage'))
        }
        console.log(arr);
    }
}

const hashtag = new Hashtag()
hashtag.doHashtag(Math.floor(Math.random() * 5))