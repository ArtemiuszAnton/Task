/* Выявить является ли введенное число четным
 */

let a = +prompt();
if (a % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

a % 2 === 0 ? console.log(true) : console.log(false);
