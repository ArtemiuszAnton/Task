/* Напишите функцию, которая принимает строку в маленьком регистре и
возаращает строку, где каждое слово начинается с большого регистра
hschool company -> Hschool Company 5
 */


const word = prompt().split(' ');
function changeWord(word) {
    let arr = []
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i][0].toUpperCase() + word[i].slice(1))
    }
    return arr
}

let res = changeWord(word);
console.log(res.join(' '));