/* 
На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
проитерировать значения объекта и сформировать на основе этих чисел массив
 */


let obj = {};
let arr = []
for (let i = 1; i <= 5; i++) {
    obj[i] = +prompt()

}

for (let i = 1; i <= 5; i++) {
    arr.push(obj[i])
    
}

console.log(arr);