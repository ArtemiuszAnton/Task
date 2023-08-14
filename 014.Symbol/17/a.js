/* На вход программе подается строка, где каждое слово заканчивается “_”.
Программа должна убрать “_” и первую букву каждого слова (помимо первого)
преобразовать в верхний регистр
anna_test_test -> annaTestTest
 */

let str = 'anna_test_test'.split('_');
str[2][0] = str[2][0].toUpperCase();
let strJoin = str.join('');
console.log(strJoin);

let result = '';
for (let i = 0; i < str.length; i++) {
    if (str[i]!== '_') {
       result += str[i]
    }
    
}
console.log(result);

