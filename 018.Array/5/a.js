/* На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
противном случае false

 */

let a = 'qwertqweft';
let arr1 = [];
let arr2 = [];

for (let i = 0; i < a.length; i++) {
        if (i <= 4) {
                arr1.push(a[i]);
        } else {
                arr2.push(a[i]);
        }
}
if (arr1.join('') === arr2.join('')){
        console.log(true);
} else {
        console.log(false);
}