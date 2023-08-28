/* На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
способы обращения к первому и последнему элементам
 */


let arr = ['hschool', 'hschool_0', 'hschool_1'];

console.log(arr[0] + ' ' + arr[2]);
console.log(arr.lastIndexOf());
console.log(arr.shift() + ' ' + arr.pop());