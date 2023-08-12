// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'


let str = 'aaa bbb ccc';
let strMassive = str.split(' ');
console.log(strMassive[0], strMassive[2]);
console.log(str.slice(4, 7));

