/*  2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами


 */

let mas = [1, 2, 3, 4, 5];
for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);

}

// while

let i = 0

while (i < mas.length) {
    console.log(mas[i]);
    i++
}

// for of

for (let i of mas) {
    console.log(i);
}