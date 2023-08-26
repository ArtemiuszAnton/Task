/* У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
массив, заполненный только числами первоначального массива
 */

let arr = ['text', 1, false, 'again', 33, 66];
let arrP = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        arrP.push(arr[i])
    }

}
console.log(arrP);