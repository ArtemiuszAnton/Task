/* На вход подается число. Необходимо вывести все числа от 1 до введенного числа
кратные 3. 
 */

let str1 = prompt();
let str2 = prompt();

if (str1.endsWith(str2)) {
    console.log(true);
} else {
    console.log(false);
}

console.log(str1.endsWith(str2) ? true : false);
str1.endsWith(str2) ? console.log(true) : console.log(false);

